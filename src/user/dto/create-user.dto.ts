import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;
}
