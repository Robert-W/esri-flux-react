var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var stylus = require('gulp-stylus');
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
  },
  stylus: {
    baseSrc: 'src/css/base.styl',
    mainSrc: 'src/css/app.styl',
    baseBuild: 'src/css',
    mainBuild: 'build/css',
    watch: 'src/css/*.styl',
    dist: 'dist/css'
  }
};

gulp.task('copy', function () {
  return gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.out));
});

gulp.task('babel-polyfill', function () {
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

gulp.task('stylus-base', function () {
  return gulp.src(config.stylus.baseSrc)
    .pipe(stylus({linenos: true}))
    // .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.baseBuild));
});

gulp.task('stylus-main', function () {
  return gulp.src(config.stylus.mainSrc)
    .pipe(stylus({linenos: true}))
    // .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.mainBuild));
});

gulp.task('stylus-dist', function () {
  return gulp.src([config.stylus.baseSrc, config.stylus.mainSrc])
    .pipe(stylus({compress: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.dist));
});

gulp.task('watch', function () {
  gulp.watch(config.stylus.watch, ['stylus-base', 'stylus-main']);
});

gulp.task('build', ['stylus-base', 'stylus-main', 'copy', 'babel-polyfill', 'imagemin-build']);
gulp.task('dist', ['copy', 'babel-polyfill', 'imagemin-dist', 'stylus-dist']);
