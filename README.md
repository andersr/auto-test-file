# Auto Test File

- Auto-generate test files in a watched directory for matching extensions.
- Ask for test specs and insert into the generated test.
- Generate test files based on default templates or define custom templates.

![atf-demo](https://user-images.githubusercontent.com/819213/59939961-6a537300-9427-11e9-94e1-ba04306c59db.gif)

## Getting Started

### Installing

- `npm install auto-test-file`
- This will provide access to the `atf` command which can be used to start the file watcher.

### Setup

- Add a watcher script to your `package.json` file, eg `"atf": "atf -d 'src' -e 'ts' 'tsx'"`
- Add config settings either directly in the command line or using a config file. (See below.)
- Use the default test file templates or replace with custom templates. (See below.)
- Run the script, which will launch the watcher.
- Files will be auto-generated while the script is running.
- Index files and dot files are ignored.

### Using the config file

`auto-test-file` can be configured either directly via the command line or using a config file. Settings passed into the script command will override any config file settings.

By default, `auto-test-file` will look for a file named `atf.config.js` in the root of the project directory. The name/location can be changed using the `--config` option.

Below is a sample config file:

```javascript
module.exports = {
  directory: "src",
  extensions: ["ts", "tsx"],
  noSpecInput: true
};
```

### Using Custom Test File Templates

- To override the default templates, add your template to the config file.

* Templates are generated using [Lodash Template](https://lodash.com/docs/4.17.15#template) and .
  `auto-test-file` uses two templates. These are the default templates for each:

#### Describe Block Template

```javascript
`import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%= setSpecItems(specs, specTemplate) %>
});`;
```

```javascript
module.exports = {
  directory: "src",
  extensions: ["ts", "tsx"],
  noSpecInput: true,
  specTemplate: `
test('<%= spec %>', () => {
expect.hasAssertions();
});
`
};
```

### Config Options

`--config`/ `-c`: point to a different config file than the default (`atf.config.js`) eg `'/Users/bobsmith/my_project/foo.config.js'`.

`--directory`/ `-d`: name of directory to be watched eg `'src'`.

`--extensions` / `-e`: extensions for which to create test files eg `'js'` `'jsx'`.

`--noSpecInput`: do not ask for specs on add of a file.

`describeTemplate`: config file only. See "Using Custom Test File Templates".

`specTemplate`: config file only. See "Using Custom Test File Templates".

### License

MIT © Anders Ramsay
