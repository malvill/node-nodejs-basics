import fs from 'fs/promises';
import path from 'path';
import { DEFAULT_ERROR_MESSAGE } from "./constants.js";
import { getDirname } from "../common.js";


export const create = async () => {
    const filePath = path.join(getDirname(import.meta.url), 'files', 'fresh.txt');
    const content = 'I am fresh and young';
    try {
        await fs.writeFile(filePath, content, {flag: 'wx'}).then(() => console.log('"fresh.txt" was created'))
    } catch {
        throw new Error(DEFAULT_ERROR_MESSAGE)
    }
};

create();