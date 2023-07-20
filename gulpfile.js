const {src, dest} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify =require('gulp-uglify-es').default

function scripts(){
    return src('app/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

function styles(){
    return src('app/style/style.css')
    .pipe(concat('style.min.css'))
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
}

exports.styles = styles;
exports.scripts = scripts;