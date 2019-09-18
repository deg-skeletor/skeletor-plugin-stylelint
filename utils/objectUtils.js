const ensureArray = obj => Array.isArray(obj) === false ? [obj] : obj;

module.exports = {
    ensureArray
};