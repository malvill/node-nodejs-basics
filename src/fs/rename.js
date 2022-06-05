import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import {DEFAULT_ERROR_MESSAGE} from "./constants.js";

export const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const wrongNamedFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files', 'wrongFilename.txt')

    if (!fs.existsSync(wrongNamedFilePath) || fs.existsSync(newFilePath)) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    await fs.rename(wrongNamedFilePath, newFilePath, () => console.log('The file was renamed!'));
};

