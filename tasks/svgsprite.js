import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import rename from 'gulp-rename';

gulp.task("svgsprite", function (done) {
	return gulp.src("src/blocks/**/*.svg")
  .pipe(svgmin({
		plugins: [{ removeViewBox: false }],
    js2svg: { pretty: true }
  }))
	.pipe(svgstore({ inlineSvg: true }))
	.pipe(rename("sprite.svg"))
	.pipe(gulp.dest("dist/assets/images/sprites/"))
  done();
});