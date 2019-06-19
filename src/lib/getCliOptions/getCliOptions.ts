import commandLineArgs, {
  CommandLineOptions,
  OptionDefinition,
  ParseOptions
} from "command-line-args";

const OPTION_DEFINITIONS: OptionDefinition[] = [
  {
    name: "directory",
    alias: "d",
    type: String
  },
  {
    name: "extensions",
    alias: "e",
    type: String,
    multiple: true
  }
];

const CLI_CONFIG: ParseOptions = {
  partial: true,
  stopAtFirstUnknown: true
};

const UNKNOWN_OPTION_MESSAGE = "Unknown option.  Please try again.";

export const getCliOptions = (): CommandLineOptions | undefined => {
  const options = commandLineArgs(OPTION_DEFINITIONS, CLI_CONFIG);

  if (options._unknown) {
    console.log(UNKNOWN_OPTION_MESSAGE);
    return;
  }

  if (!options.directories) {
    console.log("Please include one or more directories to watch.");
    return;
  }

  if (!options.extensions) {
    console.log("Please include one or more file types to watch.");
    return;
  }

  return options;
};
