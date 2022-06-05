import crypto from 'crypto';
import fs from 'fs';
import path, {dirname} from "path";
import {fileURLToPath} from "url";

export const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readable = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    return new Promise(resolve => {
        readable.on('data', data => hash.update(data)).on('end', () => resolve(hash.digest('hex')))
    })
};

