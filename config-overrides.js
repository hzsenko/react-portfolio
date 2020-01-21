const path = require('path');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets`),
  })(config, env);

  console.log(config);
  debugger;
  // config.module.loaders.push({
  //   test: /\.svg$/,
  //   loader: 'svg-inline-loader?classPrefix'
// }

  return config;
};
