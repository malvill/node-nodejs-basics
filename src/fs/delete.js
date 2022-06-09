import path from "path";
import fs from 'fs';
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";
import {getDirname} from "../common.js";

export const remove = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    fs.rm(filePath, (err) => {
        if (err) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        } else {
            console.log('The file was deleted');
        }
    })
};

remove();