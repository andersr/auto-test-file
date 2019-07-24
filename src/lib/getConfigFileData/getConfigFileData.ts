import fs from "fs";

export const getConfigFileData = () => {
 try {
  const path = `${process.cwd()}/atf.config.js`;
  if (fs.existsSync(path)) {

   // tslint:disable-next-line:no-var-requires
   return require(path);

  } else {
   return undefined;
  }
 } catch (err) {
  console.error(err)
 }

}
