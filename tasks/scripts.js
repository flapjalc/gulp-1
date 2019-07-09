import gulp from 'gulp';
import jsmin from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('scripts', function (done) {
  gulp.src('src/blocks/**/*.js')
  .pipe(jsmin())
  .pipe(rename("script.min.js"))
  .pipe(gulp.dest("dist/assets/scripts"))
  done();
});
