import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
import path from 'path';

export const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const readableFromTerminal = process.stdin;
    const writableToFile = fs.createWriteStream(filePath);
    readableFromTerminal.pipe(writableToFile);
};

