const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};