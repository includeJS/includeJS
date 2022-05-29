// plugins
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Terser = require("terser");
const pluginSEO = require("eleventy-plugin-seo");

// filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
const markdownFilter = require("./src/filters/markdown-filter.js");

// transforms
const parseTransform = require("./src/transforms/parse-transform.js");
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

const site = require("./src/_data/site.js");

module.exports = (config) => {
  // plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginSEO, {
    title: "includeJS",
    description: "Thoughts from a self-taught software developer",
    url: "https://includejs.dev",
    author: "Eva Dee",
    twitter: "GirlsCodeMK",
    image: "./dist/images/soc-share.jpg",
  });

  // filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);
  config.addFilter("markdownFilter", markdownFilter);
  config.addFilter("jsmin", function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
  });

  config.addFilter("getRandom", function (items) {
    let selected = items[Math.floor(Math.random() * items.length)];
    return selected;
  });

  config.addFilter("filterTagList", (tags) => {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  });

  // transforms
  config.addTransform("parse", parseTransform);
  config.addTransform("htmlmin", htmlMinTransform);

  // collections
  config.addCollection("notes", (collection) => {
    return [...collection.getFilteredByGlob("./src/notes/*.md")].reverse();
  });

  config.addCollection("notesFeed", (collection) => {
    return [...collection.getFilteredByGlob("./src/notes/*.md")]
      .reverse()
      .slice(0, site.notesPerPage);
  });

  config.addCollection("tagList", (collection) => {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return [...tagSet];
  });

  // shortcodes
  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  config.setUseGitIgnore(false);
  config.setQuietMode(true);
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/admin");
  config.addPassthroughCopy({ "src/static": "/" });

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
