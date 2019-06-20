import { getCliOptions, dirWatcher, optionsValid } from "./lib";

const options = getCliOptions();

if (optionsValid(options) {
  dirWatcher(options.directory, options.extensions);
}
