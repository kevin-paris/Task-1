import { Controller, Get, UsePipes, Param } from '@nestjs/common';
import { DataService } from './data.service'; // Import the DataService

import { ValidationPipe } from './validation.pipe';
import { DataItemDto } from './input.dto';

@Controller('api/data')
export class DataController {
  constructor(private readonly dataService: DataService) {} // Inject the DataService

  @Get()
  getAllData() {
    return this.dataService.getAllData();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  getDataItem(@Param() dataItemDto: DataItemDto) {
    return this.dataService.getDataItem(dataItemDto.id);
  }
}
