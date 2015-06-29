var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    config = {
      stylus: {
        src: 'src/css/app.styl',
        build: 'build/css',
        dist: 'dist/css'
      },
      copy: {
        base:'src',
        src: ['src/bower/**/*.js'],
        build: 'build'
      }
    };

gulp.task('stylus', function () {
  return gulp.src(config.stylus.src)
    .pipe(stylus({
      'include css': true,
      'linenos': true,
      'errors': true,
      'pretty': true
    }))
    .pipe(gulp.dest(config.stylus.build));
});

gulp.task('stylus:dist', function () {
  return gulp.src(config.stylus.src)
    .pipe(stylus({
      'include css': true,
      'compress': true
    }))
    .pipe(gulp.dest(config.stylus.dist));
});

gulp.task('stylus:watch', function () {
  gulp.start('stylus');
  gulp.watch(config.stylus.src, ['stylus']);
});

gulp.task('copy', function () {
  return gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.build));
});

gulp.task('copy:watch', function () {
  gulp.start('copy');
  gulp.watch(config.copy.src, ['copy']);
});
