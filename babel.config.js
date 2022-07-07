module.exports = function (api) {
  parser: "@babel/eslint-parser", api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
