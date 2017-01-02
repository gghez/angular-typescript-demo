module.exports = {
    entry: './app/app.ts',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'source-map-loader'
            ]
        }]
    },
    externals: {
        angular: "angular"
    }
};
