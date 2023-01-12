import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './admin.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ActivateAdminDto } from './dto/activate-admin.dto';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Foydalanuvchilar')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Tizimga kirish uchun ro'yhatdan o'tish" })
  @ApiResponse({ status: 201, type: ActivateAdminDto })
  @Post('/signup')
  singup(@Body() CreateUserDto: CreateAdminDto) {
    return this.adminService.singup(CreateUserDto);
  }

  @ApiOperation({ summary: 'Barcha administratorlarni olish' })
  @ApiResponse({ status: 201, type: [Admin] })
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "IDsi bo'yicha administratorni olish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Get(':id')
  findbyEmail(@Param('id') id: string) {
    return this.adminService.findbyEmail(id);
  }

  @ApiOperation({ summary: "IDsi bo'yicha administratorni o'zgartirish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "IDsi bo'yicha adminni o'chirish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  @ApiOperation({ summary: 'Tizimga admin sifatida kirish' })
  @ApiResponse({ status: 201, type: ActivateAdminDto })
  @Post('/signin')
  signin(@Body() loginDto: ActivateAdminDto) {
    return this.adminService.singin(loginDto);
  }

  @ApiOperation({ summary: 'Adminni faollashtirish' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Post('/activate')
  activateUser(@Body() activateUserDto: ActivateAdminDto) {
    return this.adminService.activateUser(activateUserDto);
  }

  @ApiOperation({ summary: "Adminni faoliyatini to'htatish" })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Post('/deactivate')
  deActivateUser(@Body() activateUserDto: ActivateAdminDto) {
    return this.adminService.deActivateUser(activateUserDto);
  }

  @ApiOperation({ summary: "Adminni IDsiga ko'ra tizimdan chiqarish" })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAdminGuard)
  @Post('/logout/:id')
  logout(@Param('id') id: number) {
    return this.adminService.logout(id);
  }
}
