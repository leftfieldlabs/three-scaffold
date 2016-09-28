var gulp  = require('gulp');
var PATH	= require('../path');

gulp.task('assets', function() {
  return gulp.src([PATH.ASSETS.SRC])
    .pipe(gulp.dest(PATH.ASSETS.DEST));
});
