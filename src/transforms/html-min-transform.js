const htmlmin = require("html-minifier");

module.exports = (value, outputPath) => {
  console.log("minifying stuff!");
  if (outputPath.indexOf(".html") > -1) {
    return htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    });
  }

  return value;
};
