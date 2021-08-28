// const { assertSupportedNodeVersion } = require('../src/Engine');

// module.exports = async () => {
//     assertSupportedNodeVersion();

//     const mix = require('../src/Mix').primary;

//     require(mix.paths.mix());

//     await mix.installDependencies();
//     await mix.init();

//     return mix.build();
// };


let mix = require('laravel-mix')
mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css')

// const path = require('path');

// module.exports = {
//  entry: './src/index.js',
//  entry: {
//    index: './src/index.js',
//    print: './src/print.js',
//  },
//   output: {
//    filename: 'bundle.js',
//    filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

mix.babelConfig({
    "plugins": ["@babel/plugin-proposal-class-properties"]
});