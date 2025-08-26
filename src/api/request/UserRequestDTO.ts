import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserRequestDTO {
    @IsNotEmpty({ message: 'firstName should not be empty' })
    public firstName: string | undefined;

    @IsNotEmpty({ message: 'lastName should not be empty' })
    public lastName: string | undefined;

    @IsNumber()
    public age: number | undefined;
}