const {
  src,
  dest
} = require('gulp');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');

const css = () => {
  return src('css/main.css')
    .pipe(cssmin())
    .pipe(concat('style.min.css'))
    .pipe(dest('public/css/'))
}

exports.css = css;
