import path from "path";
import fs from "fs";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";
import {getDirname} from "../common.js";

export const list = async () => {
    const __dirname = getDirname(import.meta.url);
    const filesPath = path.join(__dirname, 'files');

    if (!fs.existsSync(filesPath)) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    fs.readdir(filesPath, (_, files) => {
        console.log(files)
    })
}

list();