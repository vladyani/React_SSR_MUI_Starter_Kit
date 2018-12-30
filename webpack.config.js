const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        alias: {
            '@material-ui/core': '@material-ui/core/es'
        }
    },
};

const clientConfig = {
    ...common,
    entry: './src/client.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
};

const serverConfig = {
    ...common,
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    externals: [nodeExternals()]
};

module.exports = [clientConfig, serverConfig];