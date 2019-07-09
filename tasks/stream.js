import gulp from 'gulp';
import server from 'browser-sync';

gulp.task("stream", function() {
  server.init({
    server: "dist/"
  });
	gulp.watch("src/pages/*.html", gulp.series("pages")).on('change', server.reload);
	gulp.watch("src/styles/**/*.styl", gulp.series("styles")).on('change', server.reload);
  gulp.watch("src/scripts/**/*.js", gulp.series("scripts")).on('change', server.reload);
  gulp.watch("src/resources/**/*", gulp.series("other")).on('change', server.reload);
  gulp.watch('src/images/**/*.{png,jpg,jpeg}', gulp.series("images", "webp")).on('change', server.reload);
  gulp.watch('src/images/**/*.svg', gulp.series("svgsprite")).on('change', server.reload);
});