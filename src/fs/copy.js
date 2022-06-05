import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";


export const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcPath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

    if (fs.existsSync(destPath)) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    } else {
        fs.mkdirSync(destPath);
    }

    fs.readdir(srcPath, (err, files) => {
        try {
            Promise.all(files.map(file => {
                return fs.promises.copyFile(path.join(srcPath, file), path.join(destPath, file))
            }))
        } catch {
            throw new Error(DEFAULT_ERROR_MESSAGE)
        }
    })
};

copy();