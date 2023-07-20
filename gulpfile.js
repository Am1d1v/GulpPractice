const {src, dest} = require('gulp');

const sass = require('gulp-sass')(require('sass'));

function styles(){
    return src('app/style/style.sass')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
}

exports.styles = styles;