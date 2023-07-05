const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    port: 3000
  },
  publicPath: "http://127.0.0.1:3000/",
  configureWebpack: { 
    
    optimization: {

      
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'footer',
        library: { type: 'var', name: 'footer' },
        filename: 'reactEntry.js',
        exposes: {
          './footerModule': './src/components/Footer',
        },
        // shared: dependencies
      }),
    ],
  },
})
