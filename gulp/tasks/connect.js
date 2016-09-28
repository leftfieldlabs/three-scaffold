var gulp = require('gulp');
var connect = require('gulp-connect');
var PATH = require('../path');
var port = process.env.PORT || 8080;

gulp.task('connect', function() {
  connect.server({root: PATH.BUILD, port: port});
});
