var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var gulp = require('gulp');
var PATH = require('../path');

gulp.task('browserSync', ['build'], function() {
  browserSync.init([PATH.BUILD + '/**'], {
    server: {
      baseDir: [PATH.BUILD, PATH.SRC],
      port: 3000,
      middleware: [historyApiFallback()],
    },
  });
});
