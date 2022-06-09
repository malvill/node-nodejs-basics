import path from "path";
import fs from "fs";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";
import {getDirname} from "../common.js";

export const rename = async () => {
    const __dirname = getDirname(import.meta.url);
    const wrongNamedFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files', 'properFilename.md')

    if (!fs.existsSync(wrongNamedFilePath) || fs.existsSync(newFilePath)) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
    }

     fs.rename(wrongNamedFilePath, newFilePath, (err) => {
        if (err) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        } else {
            console.log('The file was renamed')
        }
    });
};

rename();

