# Auto Test File

A cli tool that creates a test file with a placeholder test for matching file extensions in a watched directory.

# Installation

- `npm install auto-test-file`
- This will provide access to the `atf`command which takes two arguments (see below.)
- Add a watcher script, eg `"atf": "atf -d 'src' -e 'ts' 'tsx'"`
- Run the script, which will launch the watcher.
- Files will be auto-generated while the script is running.
- Index files and dot files are ignored.

  # CLI Config

- -d --directory name of directory to be watched eg `src`.
- -e --extensions extensions for which to create test files eg `js` `jsx`.

# License

MIT © Anders Ramsay