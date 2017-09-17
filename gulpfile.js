
var gulp = require('gulp');
var pug = require('gulp-pug');
var tsc = require('gulp-typescript');
var sass = require('gulp-sass');

gulp.task('patrickhrastnik.github.io:pug:build', () => {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'));
});


gulp.task('patrickhrastnik.github.io:build', ['patrickhrastnik.github.io:pug:build']);