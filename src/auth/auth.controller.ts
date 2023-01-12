// import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
// import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login-auth.dto';
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

// @ApiTags('Registratsiya va Autentifikatsiya')
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @ApiOperation({ summary: "Tizimga kirish uchun ro'yhatdan o'tish" })
//   @ApiResponse({ status: 201, type: LoginDto })
//   @Post('/registration')
//   registration(@Body() CreateUserDto: CreateAdminDto) {
//     return this.authService.registration(CreateUserDto);
//   }

//   @ApiOperation({ summary: 'Tizimga kirish' })
//   @ApiResponse({ status: 201, type: LoginDto })
//   @Post('/login')
//   login(@Body() loginDto: LoginDto) {
//     return this.authService.login(loginDto);
//   }

//   @ApiOperation({ summary: 'Tizimdan chiqish' })
//   @ApiResponse({ status: 201, type: LoginDto })
//   @Post('/logout')
//   logout(@Body() loginDto: LoginDto) {
//     return this.authService.login(loginDto);
//   }
// }
