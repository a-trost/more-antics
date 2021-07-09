const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = {
  images: {
    domains: ["images.unsplash.com", "images.prismic.io"],
  },
  ...withTM(),
};
