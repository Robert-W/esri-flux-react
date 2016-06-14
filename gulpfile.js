var autoprefixer = require('gulp-autoprefixer');
var gulpPlumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var locals = require('./src/locals');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var gulp = require('gulp');
var fs = require('fs');

//- Read the version from the package json
var version = require('./package.json').version;
locals.version = version;

//- Set up error handling using plumber
var plumber = function () {
  return gulpPlumber({
    errorHandler: function (error) { console.log(error); this.emit('end'); }
  });
};

var config = {
  imagemin: {
    src: 'src/**/*.{png,jpg,gif,svg,ico}',
    dev: 'build',
    prod: 'dist'
  },
  pug: {
    watch: ['src/**/*.pug', 'src/css/**/*.scss'],
    src: ['src/index.pug'],
    dev: 'build',
    prod: 'dist',
    critical: '/css/critical.css'
  },
  sass: {
    watch: 'src/css/**/*.scss',
    src: ['src/css/app.scss', 'src/css/critical.scss'],
    dev: 'build/css',
    prod: 'dist/css'
  },
  server: {
    files: ['build/**/*.html', 'build/**/*.js', 'build/**/*.css'],
    port: process.env.PORT || 3000,
    baseDir: 'build'
  },
  htmlmin: {
    options: {
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true
    }
  }
};

gulp.task('sass-build', function () {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.sass.dev));
});

gulp.task('sass-dist', function () {
  return gulp.src(config.sass.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.sass.prod));
});

gulp.task('sass-watch', function () {
  gulp.watch(config.sass.watch, ['sass-build']);
});

gulp.task('pug-inject-css-dev', ['sass-build'], function () {
  return gulp.src(config.pug.src)
    .pipe(plumber())
    .pipe(pug({ pretty: true, locals: locals }))
    .pipe(replace('<!-- Inject: critical.css -->', '<style>' + fs.readFileSync(config.pug.dev + config.pug.critical, 'utf8') + '</style>'))
    .pipe(gulp.dest(config.pug.dev));
});

gulp.task('pug-inject-css-prod', ['sass-dist'], function () {
  return gulp.src(config.pug.src)
    .pipe(plumber())
    .pipe(pug({ locals: locals }))
    .pipe(replace('<!-- Inject: critical.css -->', '<style>' + fs.readFileSync(config.pug.prod + config.pug.critical, 'utf8') + '</style>'))
    .pipe(htmlmin(config.htmlmin.options))
    .pipe(gulp.dest(config.pug.prod));
});

gulp.task('pug-watch', function () {
  gulp.watch(config.pug.watch, ['pug-inject-css-dev']);
});

gulp.task('imagemin-build', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({ optimizationLevel: 1 }))
    .pipe(gulp.dest(config.imagemin.dev));
});

gulp.task('imagemin-dist', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
    .pipe(gulp.dest(config.imagemin.prod));
});

gulp.task('browser-sync', function () {
  var useHttps = process.env.SERVER === 'https';

  browserSync({
    server: config.server.baseDir,
    files: config.server.files,
    port: config.server.port,
    reloadOnRestart: false,
    logFileChanges: false,
    ghostMode: false,
    https: useHttps,
    open: false,
    ui: false
  });
});

gulp.task('serve', ['browser-sync']);
gulp.task('start', ['sass-build', 'pug-inject-css-dev', 'imagemin-build', 'sass-watch', 'pug-watch']);
gulp.task('production', ['pug-inject-css-prod', 'imagemin-dist']);
