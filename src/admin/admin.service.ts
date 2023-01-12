import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { ActivateAdminDto } from './dto/activate-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/types';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepository: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto, password: string) {
    const newAdmin = await this.adminRepository.create({ ...createAdminDto });
    newAdmin.password = password;
    newAdmin.save();
    return newAdmin;
  }

  async activateUser(activateAdminDto: ActivateAdminDto) {
    const { email } = activateAdminDto;
    const admin = await this.adminRepository.findOne({
      where: { email: email },
    });
    if (!admin) {
      throw new HttpException('Admin topilmadi', HttpStatus.NOT_FOUND);
    }
    if (admin.is_active === true) {
      throw new UnauthorizedException({ message: 'Admin is already active' });
    }
    admin.is_active = true;
    await admin.save();
    return admin;
  }

  async deActivateUser(activateAdminDto: ActivateAdminDto) {
    const { email } = activateAdminDto;
    const admin = await this.adminRepository.findOne({
      where: { email: email },
    });
    if (!admin) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    if (admin.is_active === false) {
      throw new UnauthorizedException({
        message: 'Admin is already deactivated',
      });
    }
    admin.is_active = false;
    await admin.save();
    return admin;
  }

  async findAll() {
    const admins = await this.adminRepository.findAll({
      include: { all: true },
    });
    return admins;
  }

  async update(id: number, data: UpdateAdminDto) {
    const newAdmin = await this.adminRepository.update(data, { where: { id } });
    if (!data) {
      throw new HttpException('Admin is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Admin is updated' };
  }

  async remove(id: number) {
    const admin = await this.adminRepository.destroy({ where: { id } });
    if (!admin) {
      throw new HttpException('Admin is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Admin is deleted' };
  }

  async findOne(id: number) {
    const data = await this.adminRepository.findOne({
      where: { id: id },
      include: { all: true },
    });
    return data;
  }

  async singup(userDto: CreateAdminDto) {
    const condidate = await this.findbyEmail(userDto.email);
    if (condidate) {
      throw new HttpException('This user is exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.adminRepository.create(userDto);
    user.password = hashedPassword;
    const tokens = await this.generateToken(
      user.email,
      user.id,
      user.is_active,
      user.is_creator,
    );
    const refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    user.hashed_refresh_token = refresh_token;
    user.save();
    return tokens;
  }

  async singin(loginDto: ActivateAdminDto) {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new HttpException('Admin is not exists', HttpStatus.NOT_FOUND);
    }
    return this.generateToken(
      user.email,
      user.id,
      user.is_active,
      user.is_creator,
    );
  }

  async logout(userId: number) {
    const result = await this.adminRepository.update(
      { hashed_refresh_token: null },
      { where: { id: userId } },
    );
    if (!result) throw new ForbiddenException('Acces Denied');
    return true;
  }

  private async generateToken(
    email: string,
    id: number,
    is_active: boolean,
    is_creator: boolean,
  ) {
    const jwtPayload: JwtPayload = {
      sub: id,
      email: email,
      is_active: is_active,
      is_creator:is_creator
    };
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token,
      refresh_token,
    };
  }

  private async validateUser(adminDto: ActivateAdminDto) {
    const user = await this.adminRepository.findOne();
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('Email or password is incorrect');
    }
    const validPassword = await bcrypt.compare(
      adminDto.password,
      user.password,
    );
    if (user && validPassword) {
      return user;
    }
    throw new UnauthorizedException('Email or password is incorrect');
  }

  async findbyEmail(email: string) {
    const data = await this.adminRepository.findOne({
      where: { email: email },
    });
    return data;
  }
}
  