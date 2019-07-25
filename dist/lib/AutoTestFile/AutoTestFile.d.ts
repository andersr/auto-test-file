import { IConfigOptions } from '../../models';
export declare class AutoTestFile {
    options: IConfigOptions;
    optionsValid: boolean;
    initialFiles: string[];
    usingConfigFile: boolean;
    constructor(options: IConfigOptions, usingConfigFile: boolean);
    setInitialFiles(): void;
    runFileWatcher(): void;
    private handleAddFile;
    private createTestFile;
    private setTestFileContent;
}
