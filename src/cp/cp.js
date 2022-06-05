import child_process from 'child_process';
import path, {dirname} from "path";
import {fileURLToPath} from "url";

export const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'script.js');

    const child = child_process.fork(filePath, args)

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdin);
};