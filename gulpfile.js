const {gulp, series} = require('gulp');

const requireDir = require('require-dir');
const {js} = require("./tasks/js_init");
const {css} = require("./tasks/css_init");
const {html} = require("./tasks/html_init");
const tasks = requireDir('./tasks');

exports.dev = series(
  js,
  css,
  html
);

exports.dev_js = tasks.dev_js;
exports.dev_css = tasks.dev_css;
