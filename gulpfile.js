// Import the dependecies to the project
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

// Set up the task to turn scss into css
gulp.task('scss', () => {
  return gulp
    .src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('clean', () => {
  return del(['./css/main.css']);
});

// Setup the task to motoring changes in sass files
// And delete the main.css file before entering the new styles
gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.series('clean')),
    gulp.watch('./scss/**/*.scss', gulp.series('scss'));
  return;
});

gulp.task('default', gulp.series('clean', 'scss', 'watch'));

