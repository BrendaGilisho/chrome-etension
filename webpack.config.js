const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss')


module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/popup.tsx')
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [tailwindcss, autoprefixer],
                        }
                    }
                }],
                test: /\.css$/i
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'), 
                    to: path.resolve('dist') }

            //     { 
            //         from: path.resolve('src/static/assets/icon.png'), 
            //         to: path.resolve('dist') },
             
            ],
          }),
        new HtmlPlugin({
            title: 'Price tracker',
            filename: 'popup.html',
            chunk: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    }
};
