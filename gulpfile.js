var gulp = require('gulp');
var livereload = require('gulp-livereload');
var less = require('gulp-less');


gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./*.html', ['html']);
  gulp.watch('./less/*.less', ['less']);
});

gulp.task('html', function(){
	gulp.src('./*.html')
    .pipe(livereload());

})

gulp.task('less', function(){
	gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());

})
