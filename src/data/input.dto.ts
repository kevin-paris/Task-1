import { IsInt, Min, Max } from 'class-validator';

export class DataItemDto {
  @IsInt()
  @Min(1)
  @Max(3) // Adjust the maximum value according to your array length
  id: number;
}
