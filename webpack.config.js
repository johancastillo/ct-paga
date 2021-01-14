// Requirements
const path = require('path');

const basePath = __dirname;
const buildPath = 'build';

// Config
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, buildPath),
        filename: '[chunkhash][name].js'
    }
};

module.exports = webpackInitConfig;