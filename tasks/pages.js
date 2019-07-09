import gulp from 'gulp';
import plumber from 'gulp-plumber';

gulp.task('pages', function(done){
	gulp.src('src/pages/*.html')
	.pipe(plumber())
	.pipe(gulp.dest('dist'))
	done();
});