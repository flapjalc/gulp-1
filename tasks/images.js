import gulp from 'gulp';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import flatten from 'gulp-flatten';

gulp.task("images", function(done) {
  gulp.src("src/blocks/**/*.{png,jpg,jpeg}")
	.pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.jpegtran({progressive: true}),
	]))
  .pipe(flatten())
	.pipe(gulp.dest("dist/assets/images"));
  done()
});

gulp.task("webp", function(done) {
  gulp.src("src/blocks/**/*.{png,jpg,jpeg}")
	.pipe(webp({quality: 80}))
  .pipe(flatten())
	.pipe(gulp.dest("dist/assets/images"));
  done()
});
