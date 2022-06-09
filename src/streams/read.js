import path from "path";
import fs from 'fs';
import {getDirname} from "../common.js";

export const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout);
};

read();