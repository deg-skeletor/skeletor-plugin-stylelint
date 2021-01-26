# Skeletor Stylelint Plugin

The purpose of this plugin is to lint a project's CSS using [Stylelint](https://stylelint.io/). This plugin is part of the Skeletor ecosystem. To learn more about Skeletor, [go here](https://github.com/deg-skeletor/skeletor-core).

**THIS REPOSITORY IS NO LONGER MAINTAINED**

## Installation
Install this plugin into your Skeletor-equipped project via the following terminal command: 
```
    npm install --save-dev @deg-skeletor/plugin-stylelint
```

## Configuration

The configuration for this plugin mimics the standard configuration patterns for Stylelint (learn more [here](https://stylelint.io/user-guide/configuration)).

### Example Configuration
```
config: {
    files: 'source/css/**/*.css'
}
```

### Configuration Options

#### files
Type: `String` 
A file path or globbing pattern of source files that should be processed. NOTE: When this plugin is run as part of `skel watch` task, only the changed file will be processed.

#### formatter 
Type: `Function` 
Default: `stylelint-formatter-pretty` 
Read more on stylelint-formatter-pretty [here](https://www.npmjs.com/package/stylelint-formatter-pretty).

For a detailed list of configuration options, check out Stylelint's [options](https://stylelint.io/user-guide/configuration). 
