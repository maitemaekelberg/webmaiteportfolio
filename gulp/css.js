"use strict";

const gulp = require('gulp'),
  sass = require('gulp-sass')
;

const plumber = require('gulp-plumber'),
  cssnano = require('gulp-cssnano'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  error = require('./error')
;

gulp.task( 'css', () => {
  return gulp.src( 'style/sass/**/*.scss' )
    .pipe( plumber( { errorHandler: error } ) )
    .pipe( sass() )
    .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1' ) )
    .pipe( cssnano() )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( 'build/css' ) );
} );