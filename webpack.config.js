module.exports = {
    entry: {
        app: {
            import: './src/ts/app.js',
        },
        sidebar: {
            import: './src/ts/sidebar.js',
        },
        transition_event: {
            import: './src/ts/transition_event.js',
        },
        unit_select: {
            import: './src/ts/unit_select.js',
        }
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}