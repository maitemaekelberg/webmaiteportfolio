"use strict";

const gulp = require( 'gulp' );

gulp.task( 'watch', function() {

  gulp.watch( 'style/sass/**/*.scss', ['css'] );
} );