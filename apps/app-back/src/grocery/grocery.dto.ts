import { IsString, IsEnum, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum Frequency {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  ANNUALLY = 'ANNUALLY',
}

export class CreateGroceryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ enum: Frequency })
  @IsEnum(Frequency)
  purchaseFrequency: Frequency;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  householdId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  link?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  store?: string;
}

export class AddToShoppingListDto {
  @IsString()
  @IsNotEmpty()
  groceryId: string;

  @IsNumber()
  @IsNotEmpty()
  householdId: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}

export class DeleteShoppingListItemDto {
  @IsString()
  @IsNotEmpty()
  itemId: string;

  @IsString()
  @IsNotEmpty()
  householdId: string;
}

export class UpdateShoppingListItemQuantityDto {
  @IsString()
  @IsNotEmpty()
  itemId: string;

  @IsString()
  @IsNotEmpty()
  householdId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
