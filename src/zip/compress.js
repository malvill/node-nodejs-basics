import zlib from 'zlib';
import fs from 'fs';
import {pipeline} from "stream";
import path from "path";
import {getDirname} from "../common.js";


export const compress = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');
    const zip = zlib.createGzip();
    const readable = fs.createReadStream(filePath);
    const writable = fs.createWriteStream(archivePath);
    pipeline(
        readable,
        zip,
        writable,
        (err) => {
            if (err) console.log(err);
        }
    );
};

compress();
