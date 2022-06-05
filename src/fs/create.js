import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { DEFAULT_ERROR_MESSAGE } from "./constants.js";


export const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';
    try {
        await fs.writeFile(filePath, content, {flag: 'wx'})
    } catch {
        throw new Error(DEFAULT_ERROR_MESSAGE)
    }
};
