import path, {dirname} from "path";
import fs from 'fs';
import {fileURLToPath} from "url";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";

export const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
    })
};

