import commandLineArgs, { CommandLineOptions, OptionDefinition, ParseOptions } from "command-line-args";

const OPTION_DEFINITIONS: OptionDefinition[] = [
    {
        name: 'directories',
        alias: "d",
        type: String,
        multiple: true
    },
    {
        name: 'extensions',
        alias: "e",
        type: String,
        multiple: true,
    },
];

const CLI_CONFIG: ParseOptions = {
    partial: true,
    stopAtFirstUnknown: true
}

const UNKNOWN_OPTION_MESSAGE = "Unknown option.  Please try again."

export const getCliOptions = (): CommandLineOptions | undefined => {
    const options = commandLineArgs(OPTION_DEFINITIONS, CLI_CONFIG);
    console.log('options: ', options);

    if (options._unknown) {
        console.log(UNKNOWN_OPTION_MESSAGE);
        // just return?
        return undefined;
    }

    return options;
}

