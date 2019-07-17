import { fileWatcher } from '..';
import { IConfigOptions } from '../../models';

interface IWatcherInit {
  err?: Error;
  options: IConfigOptions;
  matches: string[];
  cb: any;
}

export const watcherInit = ({ matches, options, err }: IWatcherInit) => {
  let initialFiles = [];
  if (err) {
    console.log('Get file paths error: ', err);
  }
  initialFiles = [...matches];
  fileWatcher(options, initialFiles);
};
