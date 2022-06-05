import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from 'util';


export const decompress = async () => {
    const pipe = promisify(pipeline);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');
    const unzip = zlib.createUnzip();
    const readable = fs.createReadStream(archivePath);
    const writable = fs.createWriteStream(filePath);
    await pipe(readable, unzip, writable);
};

decompress()