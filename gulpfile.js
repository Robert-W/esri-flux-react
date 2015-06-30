var gulp = require('gulp'),
    umd = require('gulp-umd'),
    config = {
      copy: {
        base:'src',
        src: ['src/bower/**/*.js'],
        build: 'build'
      },
      babel: {
        src: 'src/bower/babel-polyfill/browser-polyfill.js',
        build: 'build/bower/babel-polyfill/'
      }
    };

gulp.task('copy', function () {
  return gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.build));
});

gulp.task('babel:polyfill', function () {
  return gulp.src(config.babel.src)
    .pipe(umd({
      exports: function () {return '_babelPolyfill'},
      namespace: function () {return 'window._babelPolyfill'}
    }))
    .pipe(gulp.dest(config.babel.build))
})
