// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    //publicPath: process.env.NODE_ENV === 'production'
    //? './'
    //: './'

    publicPath : './', //con esta linea se elimina el "/" que producia los problemas al momento de abrir la web de manera local o en servidores con subdominos
    productionSourceMap: false, // desctivar la creacion de mapas js
    //chainWebpack: config => config.optimization.minimize(false) //desactivar la compresion de los archivos js y css
  }