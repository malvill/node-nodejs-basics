export const parseArgs = () => {
    const userInputArgs = process.argv.slice(2);
    const cliArguments = userInputArgs.reduce((acc, arg, index, arr) => {
        const value = arr[index + 1];
        if (value && arg.startsWith('--')) {
            const transformedArg = arg.slice(2);
            const cliArgumentsTransformed = `${transformedArg} is ${value}`;
            acc.push(cliArgumentsTransformed);
        } return acc;
    }, [])

    console.log(cliArguments.join(', '));
};

parseArgs();