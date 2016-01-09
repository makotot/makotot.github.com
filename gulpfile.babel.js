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
import assets from 'postcss-assets'
import stylelint from 'stylelint'
import reporter from 'postcss-reporter'


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
      normalizeCss(),
      clearfix(),
      calc(),
      assets(),
      stylelint(),
      autoprefixer(),
      cssnano(),
      reporter()
    ]))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

gulp.task('compile', ['template', 'style'])

gulp.task('serve', () => {
  runSequence('clean', ['compile'], () => {
    browserSync.init({
      server: './dist',
      open: false
    })
  })

  gulp
    .watch(['./dist/*.html'])
    .on('change', browserSync.reload);

  gulp.watch(['./src/templates/**/*.ejs'], ['template'])
  gulp.watch(['./src/scss/**/*.scss'], ['style'])
})

gulp.task('build', () => {
  runSequence('clean', 'compile', () => {
  })
})
