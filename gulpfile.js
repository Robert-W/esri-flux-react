var minifyInline = require('gulp-minify-inline');
var autoprefixer = require('gulp-autoprefixer');
var Prerender = require('react-prerender');
var gulpPlumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var stylus = require('gulp-stylus');
var locals = require('./src/locals');
var jade = require('gulp-jade');
var gulp = require('gulp');
var path = require('path');

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
    build: 'build',
    dist: 'dist'
  },
  jade: {
    watch: ['src/**/*.jade', 'src/css/**/*.styl'],
    src: ['src/index.jade'],
    build: 'build',
    dist: 'dist'
  },
  stylus: {
    watch: 'src/css/**/*.styl',
    src: ['src/css/app.styl'],
    build: 'build/css',
    dist: 'dist/css'
  },
  server: {
    files: ['build/**/*.html', 'build/**/*.js', 'build/**/*.css'],
    port: process.env.PORT || 3000,
    baseDir: 'build'
  }
};

gulp.task('stylus-build', function () {
  return gulp.src(config.stylus.src)
    .pipe(plumber())
    .pipe(stylus({ linenos: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.build));
});

gulp.task('stylus-dist', function () {
  return gulp.src(config.stylus.src)
    .pipe(stylus({ compress: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.dist));
});

gulp.task('stylus-watch', function () {
  gulp.watch(config.stylus.watch, ['stylus-build']);
});

gulp.task('jade-build', function () {
  return gulp.src(config.jade.src)
    .pipe(plumber())
    .pipe(jade({ pretty: true, locals: locals }))
    .pipe(gulp.dest(config.jade.build));
});

gulp.task('jade-dist', function () {
  return gulp.src(config.jade.src)
    .pipe(jade({ locals: locals }))
    .pipe(minifyInline())
    .pipe(gulp.dest(config.jade.dist));
});

gulp.task('jade-watch', function () {
  gulp.watch(config.jade.watch, ['jade-build']);
});

gulp.task('imagemin-build', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({ optimizationLevel: 1 }))
    .pipe(gulp.dest(config.imagemin.build));
});

gulp.task('imagemin-dist', function () {
  return gulp.src(config.imagemin.src)
    .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
    .pipe(gulp.dest(config.imagemin.dist));
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

gulp.task('prerender', function () {
  var htmlFile = path.join(__dirname, 'dist/index.html'),
      rootComponent = 'js/components/App',
      mountQuery = '#root',
      requirejs = {
        buildProfile: path.join(__dirname, 'rjs.build.js'),
        map: {
          moduleRoot: path.join(__dirname, 'build/js'),
          remapModule: 'js/config',
          ignorePatterns: [/esri\//, /dojo\//, /dijit\//]
        }
      };

  Prerender({
    component: rootComponent,
    mount: mountQuery,
    target: htmlFile,
    requirejs: requirejs
  });
});

gulp.task('serve', ['browser-sync']);
gulp.task('start', ['stylus-build', 'jade-build', 'imagemin-build', 'stylus-watch', 'jade-watch']);
gulp.task('production', ['stylus-dist', 'jade-dist', 'imagemin-dist']);
