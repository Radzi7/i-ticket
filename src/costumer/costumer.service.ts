import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Costumer } from './costumer.model';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { customerLogin } from './dto/customerLogin.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { signinDto } from './dto/signinCustomer.dto';
@Injectable()
export class CostumerService {
  constructor(
    @InjectModel(Costumer) private costumerRepository: typeof Costumer,
    private jwtService: JwtService,
  ) {}

  async signin(loginDto: signinDto) {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new HttpException('Admin is not exists', HttpStatus.NOT_FOUND);
    }
    return this.generateToken(
      user.email,
      user.id
    );
  }

  async registration(userDto: customerLogin) {
    const condidate = await this.costumerRepository.findOne({
      where: {
        email: userDto.email,
      },
    });
    if (condidate) {
      throw new HttpException('This user is exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.costumerRepository.create({
      ...userDto,
      password: hashedPassword,
    });
    const tokens = await this.generateToken(user.email, user.id);
    const token = await bcrypt.hash(tokens.refresh_token, 7);
    user.hashed_refresh_token = token 
    user.save();
    return tokens;
  }

  async create(createCostumerDto: CreateCostumerDto) {
    const newCard = await this.costumerRepository.create(createCostumerDto);
    return newCard;
  }

  async findAll() {
    const data = await this.costumerRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.costumerRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateCostumerDto) {
    const edited = await this.costumerRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Costumer is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Costumer is updated' };
  }

  async remove(id: number) {
    const data = await this.costumerRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Costumer is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Costumer is deleted' };
  }

  async findByEmailCostumer(email: string) {
    const data = await this.costumerRepository.findOne({
      where: { email: email },
      include: { all: true },
    });
    return data;
  }
  private async generateToken(email: string, id: number) {
    const jwtPayload = {
      sub: id,
      email: email,
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

  private async validateUser(loginDto: signinDto) {
    const user = await this.costumerRepository.findOne({
      where:{
        email:loginDto.email
      }
    });
    if (!user) {
      throw new UnauthorizedException('Email or password is incorrect');
    }
    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (user && validPassword) {
      return user;
    }
    throw new UnauthorizedException('Email or password is incorrect');
  }
}
