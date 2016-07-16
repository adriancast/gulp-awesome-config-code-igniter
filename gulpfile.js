var gulp = require('gulp');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var webserver = require('gulp-webserver');


gulp.task('default', function() {
  startServer();
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

/*
* Server starts at port 1337 
*/
function startServer() {
    gulp.src('./')
      .pipe(webserver({
        open: true,
        port: 1337
      }));
}
