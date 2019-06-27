export const setExtensionsGlob = (ext: string[]) =>
    ext.length === 1 ? ext[0] : `{${ext.join('|')}}`;
