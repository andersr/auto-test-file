import { getCliOptions, dirWatcher } from "./lib";

const options = getCliOptions();

if (options) {
  if (options && options.directory && options.extensions) {
    dirWatcher(options.directory, options.extensions);
  }
}
