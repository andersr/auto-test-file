import { getCliOptions, AutoTestFile } from './lib';
import { getConfigFileData } from './lib/getConfigFileData';

const configFileOptions = getConfigFileData();

const options = {
 ...(configFileOptions ? configFileOptions : {}),
 ...getCliOptions(),
};

const atf = new AutoTestFile(options, !!configFileOptions);
if (atf.optionsValid) {
 atf.setInitialFiles();
 atf.runFileWatcher();
}
