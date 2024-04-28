import path from 'path'

export default {
  webpack: (config, { isServer }) => {
    // Agregar la propiedad output a la configuración

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
            publicPath: '/_next/static/fonts/'
          }
        }
      ]
    })

    return config
  }
}
