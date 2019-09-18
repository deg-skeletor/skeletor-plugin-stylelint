const stylelintFormatter = require('stylelint-formatter-pretty');

module.exports = {
    pluginDefaults: {
        cache: false,
        formatter: stylelintFormatter,
        files: null
    },
    statuses: {
        error: 'error',
        complete: 'complete'
    },
    messages: {
        noSourceFiles: 'No source files found.'
    }
};