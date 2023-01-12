// import {  ForbiddenException, HttpException,  HttpStatus,  Injectable,  UnauthorizedException,} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { LoginDto } from './dto/login-auth.dto';
// import * as bcrypt from 'bcryptjs';
// import { AdminService } from 'src/admin/admin.service';
// import { Admin } from 'src/admin/admin.model';
// import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
// import { JwtPayload } from 'src/types';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly userService: AdminService,
//     private readonly jwtService: JwtService,
//   ) {}
//   async registration(userDto: CreateAdminDto) {
//     const condidate = await this.userService.findbyEmail(userDto.email);
//     if (condidate) {
//       throw new HttpException('This user is exists', HttpStatus.BAD_REQUEST);
//     }
//     const hashedPassword = await bcrypt.hash(userDto.password, 7);
//     const user = await this.userService.create(userDto, hashedPassword);
//     const tokens = await this.generateToken(
//       user.email,
//       user.id,
//     );
//     const refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
//     user.hashed_refresh_token = refresh_token;
//     user.save();
//     return tokens;
//   }

//   async login(loginDto: LoginDto) {
//     const user = await this.validateUser(loginDto);
//     if (!user) {
//       throw new HttpException('Admin is not exists', HttpStatus.NOT_FOUND);
//     }
//     return this.generateToken(
//       user.email,
//       user.id,
//     );
//   }

//   private async generateToken(
//     email: string,
//     id: number,
//   ) {
//     const jwtPayload: JwtPayload = {
//       sub: id,
//       email: email,
//     };
//     const [access_token, refresh_token] = await Promise.all([
//       this.jwtService.signAsync(jwtPayload, {
//         secret: process.env.ACCESS_TOKEN_KEY,
//         expiresIn: process.env.ACCESS_TOKEN_TIME,
//       }),
//       this.jwtService.signAsync(jwtPayload, {
//         secret: process.env.REFRESH_TOKEN_KEY,
//         expiresIn: process.env.REFRESH_TOKEN_TIME,
//       }),
//     ]);
//     return {
//       access_token,
//       refresh_token,
//     };
//   }

//   private async validateUser(loginDto: LoginDto) {
//     const user = await this.userService.findbyEmail(loginDto.email);
//     if (!user) {
//       throw new UnauthorizedException('Email or password is incorrect');
//     }
//     const validPassword = await bcrypt.compare(
//       loginDto.password,
//       user.password,
//     );
//     if (user && validPassword) {
//       return user;
//     }
//     throw new UnauthorizedException('Email or password is incorrect');
//   }
// }
