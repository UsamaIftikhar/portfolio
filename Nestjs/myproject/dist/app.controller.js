"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.imageFileFilter = exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("@nestjs/platform-express/multer");
const path_1 = require("path");
const app_service_1 = require("./app.service");
const fs = require('fs');
const request = require('request');
const multer = require("multer");
const path = require("path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    postImage(message) {
        console.log(message);
        return this.appService.getHello();
    }
    async uploadedFile(file) {
        console.log(file.originalname);
        const response = {
            originalname: file.originalname,
            message: "success",
            filename: exports.editFileName,
        };
        console.log(file);
        return response;
    }
};
__decorate([
    common_1.Get("salman"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post("api/post"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "postImage", null);
__decorate([
    common_1.Post("single"),
    common_1.UseInterceptors(multer_1.FileInterceptor('image', {
        storage: multer.diskStorage({
            destination: './files',
            filename: function (req, file, cb) {
                console.log(file);
                cb(null, file.originalname.split('.')[0] + path_1.extname(file.originalname));
            }
        }),
        fileFilter: exports.imageFileFilter,
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadedFile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
const imageFileFilter = (req, file, callback) => {
    console.log("hahaha2");
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path_1.extname(file.originalname);
    callback(null, `${file.originalname}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=app.controller.js.map