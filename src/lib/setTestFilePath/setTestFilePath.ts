import path from "path";

export const setTestFilePath = (filePath: string, fileName: string): string => {
    const extension = path.extname(filePath);
    const projectDir = process.env.INIT_CWD;
    const projectPath = `${projectDir}/${path.dirname(filePath)}`;
    return `${projectPath}/${fileName}.test${extension}`;

};
