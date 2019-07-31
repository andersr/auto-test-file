import { getCliOptions, AutoTestFile } from './lib';
import { getConfigFileOptions } from './lib/getConfigFileOptions';

const cliOptions = getCliOptions();

const configFileOptions = getConfigFileOptions(cliOptions.config ? cliOptions.config : undefined);

const options = {
 ...configFileOptions,
 ...cliOptions,
};

const atf = new AutoTestFile(options);
if (atf.optionsValid) {
 atf.fileWatcherInit();
}
