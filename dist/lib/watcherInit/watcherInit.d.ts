import { IConfigOptions } from '../../models';
interface IWatcherInit {
    err: Error | null;
    options: IConfigOptions;
    matches: string[];
}
export declare const watcherInit: ({ matches, options, err }: IWatcherInit) => void;
export {};
