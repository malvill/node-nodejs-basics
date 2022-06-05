import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs';

export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout);
};
