const {
  src,
  dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

const js = () => {
  return src('js/bundle.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(dest('public/js/'))
}

exports.js = js;
