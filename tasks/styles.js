import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssmin from 'gulp-csso';
import rename from 'gulp-rename';

gulp.task("styles", function(done) {
  gulp.src("src/styles/style.styl")
	.pipe(plumber())
	.pipe(stylus())
	.pipe(postcss([
    autoprefixer({
			grid: "autoplace",
			cascade: false
    })
  ]))
	.pipe(cssmin())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("dist/assets/styles/"))
	done();
});