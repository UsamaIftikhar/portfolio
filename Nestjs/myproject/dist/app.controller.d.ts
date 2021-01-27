import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postImage(message: any): string;
    uploadedFile(file: any): Promise<{
        originalname: any;
        message: string;
        filename: (req: any, file: any, callback: any) => void;
    }>;
}
export declare const imageFileFilter: (req: any, file: any, callback: any) => any;
export declare const editFileName: (req: any, file: any, callback: any) => void;
