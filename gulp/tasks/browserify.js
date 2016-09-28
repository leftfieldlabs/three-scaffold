/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var streamify    = require('gulp-streamify');
var gulpif       = require('gulp-if');
var uglify       = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var babelify		 = require('babelify');
var PATH				 = require('../path');

gulp.task('browserify', function() {

	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
		entries: [PATH.ENTRY_POINT],
		// Add file extentions to make optional in your requires
		extensions: ['.jsx', '.js'],
		// Enable source maps!
		debug: false
	});

	var bundle = function() {
		// Log when bundling starts
		bundleLogger.start();

		return bundler
			.transform('babelify', {presets: ['es2015']})
			.bundle()
			// Report compile errors
			.on('error', handleErrors)
			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specifiy the
			// desired output filename here.
			.pipe(source('app.js'))
			// uglify and ng inject if production
			.pipe(gulpif(global.isProduction, streamify(uglify())))
			// Specify the output destination
			.pipe(gulp.dest('./' + PATH.BUILD + '/'))
			// Log when bundling completes!
			.on('end', bundleLogger.end);
	};

	if(global.isWatching) {
		// Rebundle with watchify on changes.
		bundler.on('update', bundle);
	}

	return bundle();
});
