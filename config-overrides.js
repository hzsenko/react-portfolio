const path = require('path');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets`),
  })(config, env);

  return config;
};
