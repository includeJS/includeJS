const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

module.exports = (config) => {
  config.setQuietMode(true);
  config.addPassthroughCopy("./src/images/");
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
