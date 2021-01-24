process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
module.exports = {
    cache: true,
    verbose: true,
    preset: "@vue/cli-plugin-unit-jest",
    moduleFileExtensions: ["js", "json", "vue"],
    testMatch: ["**/test/**"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^webpack$": "webpack-4",
        "^webpack/(.*)": "webpack-4/$1"
    },
    transform: {
        "^[^.]+.vue$": "<rootDir>/node_modules/vue-jest",

        ".+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest"
    },
    transformIgnorePatterns: ["/node_modules/.*"],
    snapshotSerializers: ["jest-serializer-vue"],

};