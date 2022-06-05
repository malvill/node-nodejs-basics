import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (data) => {
    return nthFibonacci(data);
};

parentPort.postMessage(sendResult(workerData));