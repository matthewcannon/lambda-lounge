'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp.src('./test/**/*.js', {
        read: false
    }).pipe(mocha({
        reporter: 'list'
    }));
});

gulp.task('rgr', function() {
    gulp.watch(['./core/**/*.js', './test/**/*.js'], ['test']);
});
