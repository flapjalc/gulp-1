import gulp from 'gulp';
import zip from 'gulp-zip';

gulp.task('zip', function(done) {
  gulp.src("dist/**/*")
  .pipe(zip('template.zip'))
  .pipe(gulp.dest('.'));
  done()
});
