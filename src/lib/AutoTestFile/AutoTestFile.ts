import chokidarWatcher from 'chokidar-watcher';
import createFile from 'create-file';
import glob from 'glob';
import { IConfigOptions } from '../../models';
import { DEFAULT_WATCH_IGNORE } from '../constants';
import { fileNameFromPath } from '../fileNameFromPath';
import { getCliInput } from '../getCliInput';
import { getSpecsFromInput } from '../getSpecsFromInput';
import { setTestFilePath } from '../setTestFilePath';
import { setWatchGlob } from '../setWatchGlob';
import { validateOptions } from '../validateOptions';
import { setTestFileContent } from '../setTestFileContent';

export class AutoTestFile {
  public options: IConfigOptions;
  public optionsValid: boolean;
  public initialFiles: string[];
  public usingConfigFile: boolean;

  constructor(options: IConfigOptions, usingConfigFile: boolean) {
    this.options = options;
    this.optionsValid = validateOptions(options);
    this.initialFiles = [];
    this.usingConfigFile = usingConfigFile;
  }

  public setInitialFiles() {
    // TODO: test with large amount of files
    this.initialFiles = glob.sync(`${this.options.directory}/**/*`);
  }

  public runFileWatcher() {

    const config = {
      usePolling: true,
      interval: 100,
      ignored: DEFAULT_WATCH_IGNORE,
    }
    const handleAdd = this.handleAddFile.bind(this);

    chokidarWatcher(
      setWatchGlob(this.options),
      config,
      {
        add: handleAdd,
      },
    );

    // TODO: display on actual ready
    // TODO: display additional message if using config
    console.log(`Auto Test File: `);
    if (this.usingConfigFile) {
      console.log(`Using config file.`);
    }
    console.log(`Watching '${this.options.directory}'`);
  }

  private handleAddFile(filePath: string) {
    if (this.initialFiles.includes(filePath)) { return; }

    if (this.options.noSpecInput) {
      this.createTestFile(filePath, []);
    } else {
      getCliInput(filePath, answers => this.createTestFile(filePath, getSpecsFromInput(answers)));
    }

  }
  private createTestFile(filePath: string, specs: string[]) {
    const fileName = fileNameFromPath(filePath);
    const testFilePath = setTestFilePath(filePath, fileName);

    // TODO: move to external module?
    createFile(
      testFilePath,
      setTestFileContent(fileName, specs), (err: any) => {
        if (err) {
          console.log('err: ', err);
        } else {
          console.log(`Test file added for '${fileName}'`);
        }
      });
  }

}
