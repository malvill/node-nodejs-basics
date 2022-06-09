import path from "path";
import fs from "fs";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";
import {getDirname} from "../common.js";

export const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    if (!fs.existsSync(filePath)) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    fs.readFile(filePath, 'utf8', (err, data) => console.log(data))
};

read();