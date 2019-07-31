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
import { template, TemplateExecutor } from 'lodash';
import { setTestFileContent } from '../setTestFileContent';
import { DESCRIBE_BLOCK_TEMPLATE, SPEC_BLOCK_TEMPLATE } from '../templates';
export class AutoTestFile {
  public options: IConfigOptions;
  public optionsValid: boolean;
  public initialFiles: string[];
  private describeTemplate: TemplateExecutor;
  private specTemplate: TemplateExecutor;

  constructor(options: IConfigOptions) {
    this.options = options;
    this.optionsValid = validateOptions(options);
    this.describeTemplate = template(options.describeTemplate ? options.describeTemplate : DESCRIBE_BLOCK_TEMPLATE);
    this.specTemplate = template(options.specTemplate ? options.specTemplate : SPEC_BLOCK_TEMPLATE);
    this.initialFiles = [];
  }

  public fileWatcherInit() {
    this.setInitialFiles()
  }

  private setInitialFiles() {
    glob(`${this.options.directory}/**/*`, {}, (err, files) => {
      if (err) {
        console.log(`Error: `, err);
        return;
      }
      this.initialFiles = files;
      this.runFileWatcher();
    });
  }

  private runFileWatcher() {

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
    console.log(`Auto Test File: Watching '${this.options.directory}'`);
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

    createFile(
      testFilePath,
      setTestFileContent({
        fileName,
        specs,
        describeTemplate: this.describeTemplate,
        specTemplate: this.specTemplate
      }), (err: any) => {
        if (err) {
          console.log('err: ', err);
        } else {
          console.log(`Test file added for '${fileName}'`);
        }
      });
  }

}
