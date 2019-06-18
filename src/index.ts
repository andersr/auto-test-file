import { getCliOptions } from "./lib/getCliOptions";
import { getWatchGlob } from "./lib/getWatchGlob";

console.log("hello world!");

const options = getCliOptions();

if (options) {
    const watchGlob = getWatchGlob(options);
    console.log('watchGlob: ', watchGlob);
}
