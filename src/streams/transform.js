import {pipeline, Transform} from 'stream'

export const transform = async () => {
    const readableFromTerminal = process.stdin;
    const writableToTerminal = process.stdout;
    const transform = new Transform({
        transform(chunk, _, callback) {
            const chunkStringified = chunk.toString().trim();
            const reversedChunk = chunkStringified.split('').reverse().join('');

            callback(null, reversedChunk + '\n')
        }
    })

    pipeline(
        readableFromTerminal,
        transform,
        writableToTerminal,
        err => {
            if (err) console.log(err);
        });
};

transform();