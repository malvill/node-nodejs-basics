import child_process from 'child_process';
import path from "path";
import {getDirname} from "../common.js";

export const spawnChildProcess = async (args) => {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, 'files', 'script.js');

    const child = child_process.fork(filePath, args)

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdin);
};

spawnChildProcess('--silent --all')