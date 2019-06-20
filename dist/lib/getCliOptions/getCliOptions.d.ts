interface IOptionResults {
    _unknown?: string[];
    directory: string;
    extensions: string[];
}
export declare const getCliOptions: () => void | IOptionResults;
export {};
