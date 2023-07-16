import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsUrl()
  avatarUrl: string;
}
