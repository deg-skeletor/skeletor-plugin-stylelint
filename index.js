const path = require('path');
const stylelint = require('stylelint');
const {ensureArray} = require('./utils/objectUtils');
const {pluginDefaults, statuses, messages} = require('./config/defaults');

const run = async (config, {logger, source}) => {
    const settings = {
        ...pluginDefaults,
        ...config,
        files: getSourceFiles(source, config.files)
    };
    if (!settings.files || settings.files.length === 0) {
		logger.error(messages.noSourceFiles);
		return Promise.resolve({
			status: statuses.error,
			message: messages.noSourceFiles
		});
	}
	const report = await getLintingReport(logger, settings);
    return Promise.resolve(reportHasErrorsOrWarnings(report) ?
		handleReportErrors(logger, report) :
        handleReportNoErrors(logger, report));
};

const getLintingReport = (logger, settings) => {
	try {
        const resultsObject = stylelint.lint(settings);
        return resultsObject;
	} catch(err) {
		logger.error(messages.noSourceFiles);
		return null;
	}
};

const reportHasErrorsOrWarnings = (report = null) => report && report.errored && report.errored === true;

const handleReportErrors = (logger, report) => {
	logger.log(report.output);
	return {
		status: statuses.error
	};
};

const handleReportNoErrors = (logger, report) => {
    if (report.output) {
        logger.log(report.output);
    }
    return {
        status: statuses.complete
    };
};

const getSourceFiles = (source = null, sourceFiles = []) => {
    const sourcePathToUse = source && source.filepath ? source.filepath : sourceFiles;
	return ensureArray(sourcePathToUse).map(singlePath => path.resolve(process.cwd(), singlePath));
};

module.exports = skeletorStylelint = () => ({
    run
});