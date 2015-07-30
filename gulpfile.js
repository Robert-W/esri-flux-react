var imagemin = require('gulp-imagemin');
var umd = require('gulp-umd');
var gulp = require('gulp');
var config = {
  copy: {
    base: 'src',
    src: ['src/vendor/**/*.js'],
    out: 'build'
  },
  babel: {
    src: 'src/vendor/babel-polyfill/browser-polyfill.js',
    build: 'build/vendor/babel-polyfill/'
  },
  imagemin: {
    src: 'src/css/images/*',
    build: 'build/css/images',
    dist: 'dist/css/images'
  }
};

gulp.task('copy', function () {
  return gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.out));
});

gulp.task('babel:polyfill', function () {
  return gulp.src(config.babel.src)
    .pipe(umd({
      exports: function () {return '_babelPolyfill'; },
      namespace: function () {return 'window._babelPolyfill'; }
    }))
    .pipe(gulp.dest(config.babel.build));
});

gulp.task('imagemin-build', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true
    }))
    .pipe(gulp.dest(config.imagemin.build));
});

gulp.task('imagemin-dist', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest(config.imagemin.dist));
});

gulp.task('build', ['copy', 'imagemin-build']);
gulp.task('dist', ['copy', 'imagemin-dist']);
