var gulp = require('gulp');
var PATH = require('../path');

gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('serve', ['setWatch', 'browserSync'], function() {
	gulp.watch(PATH.STYLE.WATCH, ['scss']);
  gulp.watch(PATH.HTML.SRC, ['markup']);
	gulp.watch(PATH.IMAGES.SRC, ['images']);
	gulp.watch(PATH.ASSETS.SRC, ['assets']);
});
