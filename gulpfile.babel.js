require('require-dir')('tasks', {recurse: true});

import gulp from 'gulp';

gulp.task("build", function(cb) {
	gulp.series(
		'pages',
		'styles',
		'scripts',
    'images',
    'webp',
    'svgsprite',
    'other'
	)(cb)
});