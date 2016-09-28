var gulp = require('gulp');
var del = require('del');
var PATH = require('../path');


gulp.task('setProduction', function() {
  global.isProduction = true;
});

gulp.task('productionBuild', ['setProduction'], function() {
  gulp.start('build');
});

gulp.task('production', ['clean', 'productionBuild']);
