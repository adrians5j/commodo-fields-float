const baseConfig = require("./config.base");

// Create a module map to pofloat packages to the build output
const moduleNameMapper = {};

moduleNameMapper["^commodo-fields-float/(.*)$"] = "<rootDir>src/$1";
moduleNameMapper["^commodo-fields-float$"] = "<rootDir>src";

module.exports = Object.assign({}, baseConfig, {
    moduleNameMapper,
    coverageReporters: ["lcov", "html"],
    coveragePathIgnorePatterns: ["__tests__", "/node_modules/"]
});
