const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/app/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].[hash].js'
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ],
        alias: {
            '@comp': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@DB': path.resolve(__dirname, './src/db'),
        }
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'moment': 'moment',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|less)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    watch: true,
    watchOptions:{
        ignored: /node_modules/,
    },
    devServer: {
        host:'localhost',
        port: 8084,                 //设置默认监听端口，如果省略，默认为8080
        historyApiFallback: true,   //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true,                  //是否热部署
        quiet: false,               //让dev server处于静默的状态启动
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        },
        proxy: {
            "/pinpai/api": {
                target: "http://localhost:6061/"
            },
            "/buc/api": {
                target: "http://localhost:6601/"
            },
        },

    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            __LOCAL__: true,
            __TEST__: false,
            __PRO__: false
        }),
        new HtmlWebpackPlugin({                         //生成模板文件
            template: './index.html',
            filename: 'index.html',
            chunks: ['app','vendor'],
        })
    ]
}