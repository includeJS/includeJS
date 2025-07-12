const { dest, src } = require("gulp");

const images = async () => {
  const imagemin = (await import("gulp-imagemin")).default;
  const mozjpeg = (await import("imagemin-mozjpeg")).default;
  const optipng = (await import("imagemin-optipng")).default;
  
  return src("./src/images/**/*")
    .pipe(
      imagemin(
        [
          mozjpeg({ quality: 65, progressive: true }),
          optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          silent: true,
        }
      )
    )
    .pipe(dest("./dist/images"));
};

module.exports = images;
