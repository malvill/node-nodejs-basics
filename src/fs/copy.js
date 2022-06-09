import fs from 'fs/promises';
import path from 'path';
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";
import { getDirname } from '../common.js'


export const copy = async () => {
    const __dirname = getDirname(import.meta.url);
    const srcPath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

    try {
        await fs.mkdir(destPath);
        const srcFiles = await fs.readdir(srcPath);
        await Promise.all(srcFiles.map(file => fs.copyFile(path.join(srcPath, file), path.join(destPath, file))))
            .then(() => 'The files were copied to a new folder')
    } catch {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    }
};

copy();