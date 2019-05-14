var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var port = 4051;
var config = {
    entry: {
        'index': "./index.js",
        ///endor: ['react','react-dom','iscroll','jquery']
    },
    output: {
        //publicPath: './static/js',
		path: path.resolve(__dirname, './assets/js'),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    devServer: {
        inline: true,
        port: port,
        hot: true
    },
    externals: {
        //'react':'React',
        //'react-dom':'ReactDOM',
        //'jquery':"$",
        // 'iscroll':'IScroll'
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        },
        extensions: [ '.js', '.vue'],
    },

    plugins: [
        /* new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",  
         }),*/
        new OpenBrowserPlugin(
            { 
                url: 'http://localhost:'+port
            }
        )
    ],
    module:{
    // 指定 不同的模块使用不同的加载器处理
    // 以 .css 结尾的文件，使用 css-loader 解析css模块，使用 style-loader 将生成的 css 内容以标签的形式添加到 HTML 文档中
    rules:[
        {
            // 文件匹配正则
            test:/\.css$/,
            // 加载器，从后向前倒序使用
            exclude: /node_modules/,
            loaders:['style-loader','css-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {   
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }
    ]
  }
  

}

module.exports = config;