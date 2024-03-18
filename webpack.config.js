const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // чтобы Стили компилились в отдельный файл(по дефолту вставляются инлайново)
const CopyPlugin = require("copy-webpack-plugin");

// В Node.js для ДОСТУПА к ПЕРЕМЕННЫМ ОКРУЖЕНИЯ используется Глобальный объект  .process  со свойством  .env  -  Он хранит в себе все переменные окружения
// NODE_ENV - пременная окружения (enviroment variable). Обычно в них хранят шо-то секретное(пароли от API). 
// *cross-env - пакет, чтобы такие переменные нормально задавались на всех ОС
const isDev = process.env.NODE_ENV === 'development'; 

module.exports = { 

  entry: {
    filename: path.resolve(__dirname, 'src/js/main.js')
  },

  module: {
    rules: [

        { test: /\.(scss|css)$/, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', ] },
        { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },

        { 
         test: /\.(webp|png|jpg|jpeg|svg|gif)$/, 
         type: 'asset/resource',
         generator: {
          filename: 'images/[name][ext]'
         },
         use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
         ]
        }, 
         
        {
         test: /\.(woff2?|ttf)$/,
         type: 'asset/resource', 
         generator: {
          filename: 'fonts/[name][ext]'
         }
  
       },
  
    ]
  },

  performance: {
    hints: false, // чтобы не показывались советы/предупреждения
  },
  
  plugins: [ // структура plugins
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin( { filename: 'style.[contenthash:8].css' } ),

    new CopyPlugin({ 
      patterns: [ 
        { 
            from: path.resolve(__dirname, "src", "phpMailer"), 
            to: path.resolve(__dirname, "dist", "php/[name][ext]"),
        }, 
    ],  
    }),
    
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'js/index.js', // * filename: 'index.[contenthash].js'  - тогда файл не будет браться из кеша
    assetModuleFilename: 'asset/[name][ext]', // здесь будут файлы ресурсов, для которых НЕ ЗАДАН ПУТЬ в настройках загрузчика
    clean: true,
  },


  devServer: {
    static: { 
      directory: path.join(__dirname, 'dist'), 
    }, 
    port: 9000, 
    historyApiFallback: isDev, 
    hot: isDev, 
  },


}