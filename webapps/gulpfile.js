var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();

const folder = {
	    src: "src/", // source files
	    dist: "../src/main/resources/templates/", // build files
	    dist_assets: "../src/main/resources/templates/assets/" //build assets files
	};


gulp.task("html", function () {
    var out = folder.dist;

    return gulp
        .src([
            folder.src + "html/*.html",
            folder.src + "html/*.ico", // favicons
            folder.src + "html/*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
});

//자바스크립트 파일을 minify
gulp.task('uglify', async function () {
    return gulp.src('src/js/*.js') //src 폴더 아래의 모든 js 파일을
        .pipe(uglify()) //minify 해서
        .pipe(gulp.dest('../src/main/resources/templates/assets/js'))
        .pipe(browserSync.reload({stream:true})); //dist 폴더에 저장
});



// 파일 변경 감지
gulp.task('watch', async function () {
    gulp.watch('src/js/*.js', gulp.series('uglify'));
    gulp.watch('src/html/*.html', gulp.series('html'));
});

//gulp를 실행하면 default 로 uglify task와 watch task를 실행
gulp.task('default', gulp.series('uglify','html','watch'))