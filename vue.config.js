module.exports = {
  publicPath: "./",
  outputDir: "docs/",
  runtimeCompiler: true,
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Ryang & Sehwa Wedding";
      return args;
    });
  },
};
