const { parallel, watch } = require("gulp");
const fonts = require("./gulp-tasks/fonts.js")
const sass = require("./gulp-tasks/sass.js");


const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
};

exports.default = parallel(fonts, sass);

exports.watch = watcher;
