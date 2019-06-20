import commandLineArgs, {
  OptionDefinition,
  ParseOptions
} from "command-line-args";
import { IOptionResults } from "../../models";

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

export const getCliOptions = (): IOptionResults => commandLineArgs(
  OPTION_DEFINITIONS,
  CLI_CONFIG
) as IOptionResults;
