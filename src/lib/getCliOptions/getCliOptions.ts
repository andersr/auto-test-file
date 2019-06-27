import commandLineArgs, {
  OptionDefinition,
  ParseOptions,
} from 'command-line-args';
import { IConfigOptions } from '../../models';

const OPTION_DEFINITIONS: OptionDefinition[] = [
  {
    name: 'directory',
    alias: 'd',
    type: String,
  },
  {
    name: 'extensions',
    alias: 'e',
    type: String,
    multiple: true,
  },
  {
    name: 'noSpecInput',
    type: Boolean,
    defaultValue: false,
  },
];

const CLI_CONFIG: ParseOptions = {
  partial: true,
  stopAtFirstUnknown: true,
};

export const getCliOptions = (): IConfigOptions => commandLineArgs(
  OPTION_DEFINITIONS,
  CLI_CONFIG,
) as IConfigOptions;
