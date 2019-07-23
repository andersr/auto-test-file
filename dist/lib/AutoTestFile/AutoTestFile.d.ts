import { IConfigOptions } from '../../models';
export declare class AutoTestFile {
    options: IConfigOptions;
    optionsValid: boolean;
    initialFiles: string[];
    constructor(options: IConfigOptions);
    setInitialFiles(): void;
    runFileWatcher(): void;
    private handleAddFile;
    private createTestFile;
}
