export const parseArgs = () => {
    const args = process.argv;
    for (let argKey of Object.keys(args)) {
        console.log(`${argKey} is ${args[argKey]}`)
    }
};