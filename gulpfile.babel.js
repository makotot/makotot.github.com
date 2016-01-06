import gulp from 'gulp'
import del from 'del'
import browserSync from 'browser-sync'
import ejs from 'gulp-ejs'
import runSequence from 'run-sequence'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import normalizeCss from 'postcss-normalize'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import clearfix from 'postcss-clearfix'
import calc from 'postcss-calc'


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

gulp.task('scss', () => {

  return gulp
    .src(['./src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./tmp/css'))
})

gulp.task('style', ['scss'], () => {

  return gulp
    .src(['./tmp/css/*.css'])
    .pipe(postcss([
      clearfix(),
      calc(),
      normalizeCss(),
      autoprefixer(),
      cssnano()
    ]))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('compile', ['template', 'style'])

gulp.task('serve', () => {
  runSequence('clean', ['compile'], () => {
    browserSync.init({
      server: './dist',
      open: false
    })
  })
})

gulp.task('build', () => {
  runSequence('clean', 'compile', () => {
  })
})
