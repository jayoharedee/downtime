'use strict'

const eslint     = require('gulp-eslint')
const rename     = require('gulp-rename')
const sass       = require('gulp-sass')
const gulp       = require('gulp')

// TASKS ================================
gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

// sass to css magic
gulp.task('sass', () => {
    return gulp.src('srv/sass/style.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('srv/css'))
})

// default
gulp.task('default', [
    'lint',
    'sass'
])
