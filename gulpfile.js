const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('saludar', function(){
  console.log('Hola mundo')  
})

gulp.task('sass', function(){
    return gulp.src('static/css/materialize.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
})