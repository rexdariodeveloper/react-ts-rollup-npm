module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|tx|tsx)"
],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-essentials", 
    "@storybook/addon-postcss",
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "@storybook/addon-interactions"
],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    // const fileLoaderRule = config.module.rules.find(
    //   (rule) => rule.test && rule.test.test(".svg")
    // );
    // fileLoaderRule.exclude = /\.svg$/;

    // config.module.rules.push({
    //     test: /\.svg$/,
    //     enforce: "pre",
    //     loader: require.resolve("@svgr/webpack")
    // });
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    // remove svg from existing rule
    
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../")
    // });

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve("babel-loader"),
    //   options: {
    //     presets: [["react-app", { flow: false, typescript: true }]]
    //   }
    // });
    // config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};