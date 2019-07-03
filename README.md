# Auto Test File

- Auto-generate test files in a watched directory for matching extensions.
- Ask for test specs and insert into the generated test.
- Ignores index and dot files.

![atf-demo](https://user-images.githubusercontent.com/819213/59939961-6a537300-9427-11e9-94e1-ba04306c59db.gif)

## Getting Started

### Installing

- `npm install auto-test-file`
- This will provide access to the `atf` command which can be used to start the file watcher.

### Running the watcher

- Add a watcher script to your `package.json` file, eg `"atf": "atf -d 'src' -e 'ts' 'tsx'"`
- Run the script, which will launch the watcher.
- Files will be auto-generated while the script is running.
- Index files and dot files are ignored.

### Config Options

`--directory`/ `-d`: name of directory to be watched eg `'src'`.

`--extensions` / `-e`: extensions for which to create test files eg `'js'` `'jsx'`.

`--noSpecInput`: do not ask for specs on add of a file.

## License

MIT © Anders Ramsay
