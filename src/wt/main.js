import os from 'os';
import { Worker } from 'worker_threads';
import path, {dirname} from "path";
import {fileURLToPath} from "url";

export const performCalculations = async () => {
    const numOfCpus = os.cpus().length;
    const workers = [];
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'worker.js');

    for (let i = 0; i <= numOfCpus; i++) {
        const workerPromise = new Promise((resolve) => {
            const worker = new Worker(filePath, {workerData: 10 + i});
            worker.on('message', message => resolve({ status: 'resolved', data: message }))
            worker.on('error', () => resolve({ status: 'error', data: null }))
        })
        workers.push(workerPromise)
    }

    return await Promise.all(workers);
};
