import { getCliOptions, AutoTestFile } from './lib';

const options = getCliOptions();

const atf = new AutoTestFile(options);
if (atf.optionsValid) {
 atf.setInitialFiles();
 atf.runFileWatcher();
}
