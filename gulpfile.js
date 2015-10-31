var gulp = require('gulp'),
  del = require('del'),
  browserSync = require('browser-sync'),
  ejs = require('gulp-ejs'),
  runSequence = require('run-sequence');


gulp.task('clean', function (done) {
  done();
});

gulp.task('template', function () {

  return gulp
    .src([
      './src/templates/*.ejs',
      '!./src/templates/_*.ejs'
    ])
    .pipe(ejs())
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile', ['template']);

gulp.task('build', function () {
  runSequence('clean', 'compile', function () {
  });
});
