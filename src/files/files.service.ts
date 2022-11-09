import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { extname, resolve, join } from 'path';
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { FileUpload } from 'graphql-upload-minimal';

@Injectable()
export class FilesService {
  async createFile(file: FileUpload): Promise<string> {
    try {
      const fileExt = extname(file.filename);
      const fileName = uuidv4() + fileExt;
      const filePath = resolve(__dirname, '..', 'static');
      if (!existsSync(filePath)) {
        mkdirSync(filePath, { recursive: true });
      }
      writeFileSync(join(filePath, fileName), file.encoding);
      return fileName;
    } catch (error) {
      throw new HttpException(
        'Произошла ошибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async createFiles(files: Array<Express.Multer.File>): Promise<string[]> {
    try {
      const fileNames = [];
      files.forEach((file) => {
        const fileExt = extname(file.originalname);
        const fileName = uuidv4() + fileExt;
        const filePath = resolve(__dirname, '..', 'static');
        if (!existsSync(filePath)) {
          mkdirSync(filePath, { recursive: true });
        }
        writeFileSync(join(filePath, fileName), file.buffer);
        fileNames.push(fileName);
      });
      return fileNames;
    } catch (error) {
      throw new HttpException(
        'Произошла ошибка при записи файлов',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async gqlCreateFile(file: FileUpload): Promise<string> {
    const { createReadStream, filename } = file;
    const filePath = resolve(__dirname, '..', 'static');
    if (!existsSync(filePath)) {
      mkdirSync(filePath, { recursive: true });
    }
    return new Promise(async (resolve) => {
      createReadStream()
        .pipe(createWriteStream(join(filePath, filename)))
        .on('finish', () => resolve(filename))
        .on('error', () => {
          new HttpException('Could not save image', HttpStatus.BAD_REQUEST);
        });
    });
  }
}
