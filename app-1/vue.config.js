const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    port: 8080,
  },
  publicPath: "http://127.0.0.1:8080/",
  configureWebpack: {
    
    optimization: {
      
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'search',
        filename: 'remoteEntry.js',
        exposes: {
          './searchModule': './src/components/Weather',
        },
        remotes: {
          vueContainer: "vueContainer@http://localhost:8081/vueMain.js"
        }
      }),
    ],
  },
})
