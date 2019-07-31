import fs from "fs";
import { DEFAULT_CONFIG_FILE } from '../constants';

export const getConfigFileOptions = (path: string = `${process.cwd()}/${DEFAULT_CONFIG_FILE}`) => {
 return fs.existsSync(path) ? require(path) : {};
}
