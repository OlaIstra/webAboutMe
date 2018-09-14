const gulp = require('gulp'),
    watch = require('gulp-watch'),
	batch = require('gulp-batch'),
	htmlmin = require('gulp-htmlmin'),
	csso = require('gulp-csso'),
	bump = require('gulp-bump'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync'),
    babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('app/js/main.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js/'))
);

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('all', ['browser-sync'], function() {
    gulp.watch('app/css/main.css', browserSync.reload); 
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/main.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('reload', function(){ // Создаем таск Sass
    return gulp.src('app/css/main.css') // Берем источник
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('imgmin', () =>
	gulp.src('app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('app/js/main.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task('minify', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function () { console.log('Working!'); });

gulp.task('watch', function () {
    watch('**/*.*', batch(function (events, done) {
        gulp.start('build', done);
    }));
});



gulp.task('css', function () {
    return gulp.src('app/css/main.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css/'));
});
