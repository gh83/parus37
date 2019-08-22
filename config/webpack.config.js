// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _root = path.resolve();
const _outputPath = path.resolve(_root, 'build');

module.exports = {
  mode: 'development',
  //mode:'production',
  entry: {
    user: './src/launcher.js'
  },
  output: {
    path: _outputPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|non_npm_dependencies)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', {
              "targets": "> 0.25%, not dead"
            }]
          ],
          plugins: [
            '@babel/transform-runtime',
            ["@babel/plugin-proposal-decorators", {
              "legacy": true
            }],
            '@babel/plugin-proposal-class-properties'
          ],
          cacheDirectory: false
        }
      }]
    },
    {
      test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {
          //publicPath: 'assets',
          name: '[name].[ext]',
          outputPath: 'assets',
        }
      }
    },
    {
      test: /\.(less|css)$/,
      exclude: [
        /node_modules/,
      ],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: [
              require('autoprefixer')({
                browsers: ['last 3 version', '> 3%', 'safari 5', 'ios 6', 'android 4']
              })
            ]
          }
        },
        {
          loader: 'less-loader'
        }
      ]
    },

    ]
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets'
    }, {
      from: './src/server',
      to: './'
    },
    {
      from: './src/support',
      to: './'
    }
    ], {
        debug: false
      })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};