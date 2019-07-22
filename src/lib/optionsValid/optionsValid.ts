import { IConfigOptions } from '../../models';
import {
  UNKNOWN_OPTION_MESSAGE,
  NO_DIRECTORY_MESSAGE,
  NO_EXTENSIONS_MESSAGE,
  NO_OPTIONS_MESSAGE,
} from '../messages';

export const optionsValid = (options: IConfigOptions): boolean => {

  if (!options) {
    console.log(NO_OPTIONS_MESSAGE);
    return false;
  }
  if (options._unknown) {
    console.log(UNKNOWN_OPTION_MESSAGE);
    return false;
  }

  if (!options.directory) {
    // TODO: also confirm that directory exists
    console.log(NO_DIRECTORY_MESSAGE);
    return false;
  }

  if (!options.extensions) {
    console.log(NO_EXTENSIONS_MESSAGE);
    return false;
  }

  return true;
};
