module.exports = {
  // port: 3030,
  proxy: {
    '/proxy': {
      target: 'https://114.55.108.245:10080/cms/api/',
      ws: true,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/proxy/, '')
    }
  }
}
