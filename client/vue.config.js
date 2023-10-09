module.exports = {
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:3307',
        changeOrigin: true
      },
    },
    host:"0.0.0.0",
    port:8082,
    https:false
  }
}