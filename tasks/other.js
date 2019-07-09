import gulp from 'gulp';
import del from 'del';

gulp.task("other", function (done) {
  gulp.src("src/resources/*.*")
  .pipe(gulp.dest("dist"))
  gulp.src(["src/resources/**", "!src/resources/*.*"])
  .pipe(gulp.dest("dist/assets"))
  done()
});
