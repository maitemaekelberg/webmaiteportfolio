"use strict";

const gulp = require('gulp');

require('./gulp/watch.js');
require('./gulp/css.js');
//require('./gulp/favicons.js');

// default
gulp.task( 'default', [ 'watch' ] );