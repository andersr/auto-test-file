import nodepath from "path";

export const getFileName = (path: string) => nodepath.basename(path);
