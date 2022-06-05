export const parseEnv = () => {
    const keys = Object.keys(process.env).filter(key => key.slice(4));
    for (const key of keys) {
        process.stdout.write(`${key}=${process.env[key]}\n`)
    }
};
