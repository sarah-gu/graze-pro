module.exports = {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      config.module.rules.push({
        test: /\.html$/i,
        loader: "html-loader",
      });
      return config
    },
  }