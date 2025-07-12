const { dest, src } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");

const sassProcessor = gulpSass(dartSass);

const isProduction = process.env.NODE_ENV === "production";

const criticalStyles = ["styles.scss"];

const calculateOutput = ({ history }) => {
  let response = "./dist/css";

  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  if (criticalStyles.includes(sourceFileName)) {
    response = "./src/_includes/css";
  }

  return response;
};

const sass = () => {
  return src("./src/scss/*.scss")
    .pipe(sassProcessor().on("error", sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2,
            }
          : {}
      )
    )
    .pipe(dest(calculateOutput, { sourceMaps: !isProduction }));
};

module.exports = sass;
