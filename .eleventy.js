const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const parseTransform = require("./src/transforms/parse-transform.js");
const site = require("./src/_data/site.js");

module.exports = (config) => {
  config.addPlugin(rssPlugin);
  config.setUseGitIgnore(false);
  config.setQuietMode(true);
  config.addPassthroughCopy("./src/images/");

  config.addTransform("parse", parseTransform);

  config.addCollection("notes", (collection) => {
    return [...collection.getFilteredByGlob("./src/notes/*.md")].reverse();
  });

  config.addCollection("notesFeed", (collection) => {
    return [...collection.getFilteredByGlob("./src/notes/*.md")]
      .reverse()
      .slice(0, site.notesPerPage);
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
