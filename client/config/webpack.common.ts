const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    client: './client/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Injects CSS in to the DOM using a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Resolves `@import` and `url()`
            loader: 'css-loader'
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
