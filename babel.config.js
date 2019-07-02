module.exports = function babelConfig(api) {
  const plugins = [['babel-plugin-styled-components', { pure: true }]];
  const presets = ['module:metro-react-native-babel-preset'];
  api.cache(true);

  return { presets, plugins };
};
