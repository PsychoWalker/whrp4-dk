const { src, dest, watch, series} = require("gulp");
const del = require("del");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

//Удаление директории
const clear = () => {
  return del("./public");
}

//обработка HTML
const html = cb => {
 return src("./index.html")
   .pipe(plumber({
     errorHandler: notify.onError()
   }))
   .pipe(size({ title: "До сжатия"}))
   .pipe(htmlmin({
     collapseWhitespace: true
   }))
   .pipe(size({ title: "После сжатия"}))
  .pipe(dest("./public"));
}

const watcher = () => {
  watch("./index.html", html);
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;


exports.dev = series(
  clear,
  html,
  watcher
);
