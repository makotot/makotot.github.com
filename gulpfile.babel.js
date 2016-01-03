import gulp from 'gulp'
import del from 'del'
import browserSync from 'browser-sync'
import ejs from 'gulp-ejs'
import runSequence from 'run-sequence'


gulp.task('clean', (done) => {
  done()
})

gulp.task('template', () => {

  return gulp
    .src([
      './src/templates/*.ejs',
      '!./src/templates/_*.ejs'
    ])
    .pipe(ejs())
    .pipe(gulp.dest('./dist'));
})

gulp.task('compile', ['template'])

gulp.task('build', () => {
  runSequence('clean', 'compile', () => {
  })
})
