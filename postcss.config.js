/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 11:06:31
 * @Desc: postcss配置
 */

module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      require('postcss-flexbugs-fixes')(),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        browsers: [
          'last 10 Chrome versions',
          'last 5 Firefox versions',
          'Safari >= 6',
          'ie > 8'
        ]
      }),
      require('cssnano')({
        'cssnano-preset-advanced': {
          zindex: false,
          autoprefixer: true
        }
      })
    ]
  }
}
// module.exports = [
//   require('postcss-flexbugs-fixes')(),
//   require('postcss-preset-env')({
//     autoprefixer: {
//       flexbox: 'no-2009'
//     },
//     stage: 3
//   }),

// ]
// module.exports = [
//   {
//     'postcss-flexbugs-fixes': {},
//     'postcss-preset-env': {
//       autoprefixer: {
//         flexbox: 'no-2009'
//       },
//       stage: 3
//     },
//     // 'postcss-aspect-ratio-mini': {},
//     // 'postcss-px-to-viewport': {
//     //   viewportWidth: 375, // (Number) The width of the viewport.
//     //   viewportHeight: 667, // (Number) The height of the viewport.
//     //   unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
//     //   viewportUnit: 'vw', // (String) Expected units.
//     //   selectorBlackList: ['.ignore', '.hairlines', '.antd'], // (Array) The selectors to ignore and leave as px.
//     //   minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
//     //   mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
//     //   exclude: /(\/|\\)(src)(\/|\\)/
//     // },
//     // 'postcss-write-svg': {utf8: false},
//     // 'postcss-viewport-units': {
//     //   filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1
//     // },
//     cssnano: {
//       'cssnano-preset-advanced': {
//         zindex: false
//         // autoprefixer: false
//       }
//       // preset: 'advanced',
//       // autoprefixer: false,
//       // 'postcss-zindex': false,
//     }
//   }
// ]
