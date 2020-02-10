const baseConfig = require("./config.base");

// Create a module map to pofloat packages to the build output
const moduleNameMapper = {};

moduleNameMapper["^commodo-fields-float/(.*)$"] = "<rootDir>dist/$1";
moduleNameMapper["^commodo-fields-float$"] = "<rootDir>dist";

module.exports = Object.assign({}, baseConfig, {
    moduleNameMapper
});
