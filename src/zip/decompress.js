import zlib from 'zlib';
import fs from 'fs';
import {pipeline} from "stream";
import path from "path";
import {getDirname} from "../common.js";


export const decompress = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');
    const unzip = zlib.createUnzip();
    const readable = fs.createReadStream(archivePath);
    const writable = fs.createWriteStream(filePath);
    pipeline(readable, unzip, writable, (err) => {
        if (err) console.log(err)
    });
};

decompress()