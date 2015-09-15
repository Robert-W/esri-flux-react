/*
 NOTE: To Use this file, change the filename to gulpfile.babel.js and rename
 the original gulpflie to something else or delete it.
*/

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import stylus from 'gulp-stylus';
import umd from 'gulp-umd';
import gulp from 'gulp';

let config = {
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
  },
  server: {
    files: ['build/**/*.html', 'build/**/*.js', 'build/**/*.css'],
    port: process.env.PORT || 3000,
    url: 'build'
  }
};

gulp.task('copy', () =>
  gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.out))
);

gulp.task('babel-polyfill', () =>
  gulp.src(config.babel.src)
    .pipe(umd({
      exports: () => '_babelPolyfill',
      namespace: () => 'window._babelPolyfill'
    }))
    .pipe(gulp.dest(config.babel.build))
);

gulp.task('imagemin-build', () =>
  gulp.src(config.imagemin.src)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true
    }))
    .pipe(gulp.dest(config.imagemin.build))
);

gulp.task('imagemin-dist', () =>
  gulp.src(config.imagemin.src)
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest(config.imagemin.dist))
);

gulp.task('stylus-base', () =>
  gulp.src(config.stylus.baseSrc)
    .pipe(stylus({linenos: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.baseBuild))
);

gulp.task('stylus-main', () =>
  gulp.src(config.stylus.mainSrc)
    .pipe(stylus({linenos: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.mainBuild))
);

gulp.task('stylus-dist', () =>
  gulp.src([config.stylus.baseSrc, config.stylus.mainSrc])
    .pipe(stylus({compress: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.dist))
);

gulp.task('watch', () => {
  gulp.watch(config.stylus.watch, ['stylus-base', 'stylus-main']);
});

gulp.task('browser-sync', () => {
  browserSync({
    files: config.server.files,
    server: config.server.url,
    port: config.server.port,
    reloadOnRestart: false,
    logFileChanges: false,
    ghostMode: false,
    open: false,
    ui: false
  });
});

gulp.task('serve', ['browser-sync']);
gulp.task('build', ['stylus-base', 'stylus-main', 'copy', 'babel-polyfill', 'imagemin-build']);
gulp.task('dist', ['copy', 'babel-polyfill', 'imagemin-dist', 'stylus-dist']);
