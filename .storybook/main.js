module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  core: {},
  webpackFinal: async (config, {
    configType
  }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Add SVGR Loader
    // ========================================================

    // Make whatever fine-grained changes you need

    // Remove svg from existing rule
    config.module.rules = config.module.rules.map(rule => {
      if (String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
        };
      }
      return rule;
    });

    // Use svgr for svg files
    config.module.rules.unshift({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: {
        not: [/url/]
      },
      // exclude react component if *.svg?url
      use: ["@svgr/webpack"]
    });

    // Return the altered config
    return config;
  }
};