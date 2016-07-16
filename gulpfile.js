var gulp = require('gulp');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var webserver = require('gulp-webserver');


gulp.task('default', function() {
  livereload.listen();
  trackFiles();
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


gulp.task('server', function() {
  startServer();
  livereload.listen();
  gulp.watch('./*.html', ['html']);
  gulp.watch('./less/*.less', ['less']);
});

/*
* This keeps track of the files
*/
function trackFiles() {
  gulp.watch('./*.html', ['html']);
  gulp.watch('./less/*.less', ['less']);
}

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
