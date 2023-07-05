const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  publicPath: "http://127.0.0.1:8081/",
  devServer: {
    port: 8081,
  },
  // transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "vueContainer",
        filename: "vueMain.js",
        remotes: {
          search: "search@http://localhost:8080/remoteEntry.js",
          footer: "footer@http://localhost:3000/reactEntry.js",
        },
        exposes: {
          './headerModule': './src/components/Header'
        }
      }),
    ],
  },
});
