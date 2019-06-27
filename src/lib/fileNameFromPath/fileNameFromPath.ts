import path from 'path';
import { removeExtension } from '../removeExtension';

export const fileNameFromPath = (filePath: string) => removeExtension(path.basename(filePath));
