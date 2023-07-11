const {src, dest} = require("gulp");

//Плагины
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const htmlsize = require("gulp-size" );


const html = () => {
  return src("./index.html")
    .pipe(fileInclude())
    .pipe(htmlsize({title:"До сжатия"}))
    .pipe(htmlmin({
      collapseWhitespace: true
  }))
    .pipe(htmlsize({title:"После сжатия"}))
    .pipe(dest("./public"))
}

exports.html = html;
