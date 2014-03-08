var  gulp = require('gulp'),
  connect = require('gulp-connect'),
  coffee = require('gulp-coffee'),
  less = require('gulp-less');

gulp.task('connect', connect.server({
  root: ['public'],
  port: 1337,
  livereload: true,
  open: {
    browser: 'google-chrome'
  }
}));

gulp.task('coffee', function () {
  gulp.src('./public/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'))
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src('./public/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./public/**/*.coffee'], ['coffee']);
  gulp.watch(['./public/**/*.less'], ['less']);
  gulp.watch(['./public/*.html'], ['html']);
});

gulp.task('default', ['connect', 'coffee', 'less', 'watch']);