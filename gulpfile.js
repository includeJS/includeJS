const { parallel, watch } = require("gulp");
const fonts = require("./gulp-tasks/fonts.js")
const sass = require("./gulp-tasks/sass.js");
const images = require("./gulp-tasks/images.js");


const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
  watch("./src/images/**/*", { ignoreInitial: true }, images);

};

exports.default = parallel(fonts, sass);

exports.watch = watcher;
