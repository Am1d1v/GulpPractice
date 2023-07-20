const {src, dest} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function styles(){
    return src('app/style/style.css')
    .pipe(concat('style.min.css'))
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
}

exports.styles = styles;