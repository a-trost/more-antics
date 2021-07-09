module.exports = {
  stories: [
    "../slices/**/*.stories.[tj]s",
    "../components/**/*.stories.[tj]s",
    "../.slicemachine/assets/slices/**/*.stories.[tj]s",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });

    return config;
  },
};
