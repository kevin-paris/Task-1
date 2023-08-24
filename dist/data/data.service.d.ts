export declare class DataService {
    private data;
    getAllData(): {
        id: number;
        name: string;
    }[];
    getDataItem(id: number): {
        id: number;
        name: string;
    };
}
