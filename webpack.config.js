var path = require('path');
var webpack = require('webpack');
require('core-js');

module.exports = {
      context: path.join(__dirname, 'client'),
        entry: './scripts/client.js',
        output: { path: __dirname, filename: 'bundle.js' },
        module: {
          loaders: [
            {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            }
          ],
        },
      };
