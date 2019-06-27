import { IConfigOptions } from '../../models';
import { setExtensionsGlob } from '../setExtensionsGlob';

export const setWatchGlob = (options: IConfigOptions) => {
  return `./${options.directory}/**/*.${setExtensionsGlob(options.extensions)}`;
};
