import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from 'util';


export const compress = async () => {
    const pipe = promisify(pipeline);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');
    const zip = zlib.createGzip();
    const readable = fs.createReadStream(filePath);
    const writable = fs.createWriteStream(archivePath);
    await pipe(readable, zip, writable);
};

compress();