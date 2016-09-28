var gulp = require('gulp');
var PATH = require('../path');

gulp.task('markup', function() {
  return gulp.src(PATH.HTML.SRC)
    .pipe(gulp.dest(PATH.BUILD));
});
