import { Controller, Get, Post, Body, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express/multer';
import { Socket } from 'dgram';
import express from 'express';
import { extname } from 'path';
import { AppService } from './app.service';
const fs = require('fs')
const request = require('request')
const multer = require("multer");
const path = require("path");


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("salman")
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("api/post")
  postImage(@Body() message): string {
    console.log(message);

    return this.appService.getHello();
  }
  
@Post("single")
@UseInterceptors(
    FileInterceptor('image', {
      storage: multer.diskStorage({
        destination: './files',
        filename: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname.split('.')[0]+ extname(file.originalname))
        }
        
       
      }),
      fileFilter: imageFileFilter,
    }),
  )
  
  async uploadedFile(@UploadedFile() file) {
    console.log(file.originalname);
    
    const response = {
      originalname: file.originalname,
      message: "success",
      filename: editFileName,
      
    };
    console.log(file);
    
    return response;
  }


}

export const imageFileFilter = (req, file, callback) => {
  console.log("hahaha2");
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  callback(null, `${file.originalname}${fileExtName}`);
};
