import { Injectable, NotFoundException } from '@nestjs/common';
//import { FetchDataDto } from './input.dto'; // Import the FetchDataDto

@Injectable()
export class DataService {
  private data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getAllData() {
    return this.data;
  }

  getDataItem(id: number) {
    const item = this.data.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException('Data item not found');
    }
    return item;
  }
}
