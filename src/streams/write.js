import fs from 'fs';
import path from 'path';
import { getDirname } from "../common.js";

export const write = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const readableFromTerminal = process.stdin;
    const writableToFile = fs.createWriteStream(filePath);
    readableFromTerminal.pipe(writableToFile);
};

write();