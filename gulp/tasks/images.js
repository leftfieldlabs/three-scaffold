var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var PATH 			 = require('../path');

gulp.task('images', function() {
	var dest = PATH.IMAGES.DEST;

	return gulp.src(PATH.IMAGES.SRC)
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
