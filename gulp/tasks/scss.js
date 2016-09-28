var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var minifycss = require('gulp-clean-css');
var handleErrors = require('../util/handleErrors');
var PATH = require('../path');

gulp.task('scss', function () {
  return gulp.src(PATH.STYLE.SRC)
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulpif(global.isProduction, minifycss()))
    .on('error', handleErrors)
    .pipe(gulp.dest(PATH.BUILD+'/'))
});
