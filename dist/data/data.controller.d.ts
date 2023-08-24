import { DataService } from './data.service';
import { DataItemDto } from './input.dto';
export declare class DataController {
    private readonly dataService;
    constructor(dataService: DataService);
    getAllData(): {
        id: number;
        name: string;
    }[];
    getDataItem(dataItemDto: DataItemDto): {
        id: number;
        name: string;
    };
}
