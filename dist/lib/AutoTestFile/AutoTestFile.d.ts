import { IConfigOptions } from '../../models';
export declare class AutoTestFile {
    options: IConfigOptions;
    optionsValid: boolean;
    initialFiles: string[];
    private describeTemplate;
    private specTemplate;
    constructor(options: IConfigOptions);
    fileWatcherInit(): void;
    private setInitialFiles;
    private runFileWatcher;
    private handleAddFile;
    private createTestFile;
}
