module.exports = {
    entry: {
        vendor: ['core.js', 'zone.js', 'reflect-metadata'],
        main: __dirname + '/app/main'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    }
};