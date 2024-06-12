const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("src/**/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

exports.compileSass = compileSass;
exports.watch = function () {
  gulp.watch("src/**/*.scss", compileSass);
};
