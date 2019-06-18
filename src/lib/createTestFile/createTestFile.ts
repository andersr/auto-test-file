import createFile from "create-file";
import { getFileExtension } from "./getFileExtension";
import { removeExtension } from "./removeExtension";
import { setTestFileContent } from "./setTestFileContent";

interface ICreateTestFileArgs {
    path: string;
    fileName: string;
    // extension: string;
    // template: string;
}
export const createTestFile = (args: ICreateTestFileArgs) => {
    console.log('args: ', args);

    const extension = getFileExtension(args.fileName);
    const noExtension = removeExtension(args.fileName);
    console.log('extension: ', extension);
    // TODO: create clear relationship between "test" value and ignore, to prevent infinite loop of creates
    createFile(`./${args.path}/${noExtension}.test.${extension}`, setTestFileContent(noExtension), function (err: any) {
        if (err) {
            console.log('err: ', err);
        }
        // file either already exists or is now created (including non existing directories)
    });
} 
