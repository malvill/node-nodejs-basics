import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";

export const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesPath = path.join(__dirname, 'files');

    if (!fs.existsSync(filesPath)) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    fs.readdir(filesPath, (_, files) => {
        console.log(files)
    })
}

