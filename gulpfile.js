

const gulp = require("gulp");
const sass = require("gulp-sass");

//open file compile, show errors
//set up some simple tasks for Gulp to run
function compile(done){
    gulp.src("sass/**/*.scss")
     .pipe(sass())
      .on("error", sass.logError)
        .pipe(gulp.dest("css"))
}


exports.compile = compile

// // gulp modules required
// let gulp = require("gulp");
// let sass = require("gulp-sass");

// // Compile Sass
// gulp.task("sass", function () {
//   return gulp
//     .src("./sass/**/*.scss")
//     .pipe(sass({
//       outputStyle: "compressed"
//     }).on("error", sass.logError))
//     .pipe(gulp.dest("./public/css"));
// });

// gulp.task("default", ["sass"]);

// // watch task running
// gulp.task("watch", function () {
//   gulp.watch("./sass/**/*.scss", ["sass"]);
// });

// const gulp = require("gulp"),
//   sass = require("gulp-sass"),
//   sourcemaps = require("gulp-sourcemaps"),
//   browserSync = require("browser-sync").create(),
//   source = "./sass/",
//   dest = "./public/css/";

// sass.compiler = require("node-sass");

// function html() {
//   return gulp.src(dest + "**/*.html");
// }

// function js() {
//   return gulp.src(dest + "**/*.js");
// }

// function mains() {
//   return gulp
//     .src(source + "sass/main.scss")
//     .pipe(sourcemaps.init())
//     .pipe(
//       sass({
//         sourcemap: true,
//         style: "compressed"
//       }).on("error", sass.logError)
//     )
//     .pipe(gulp.dest(dest + "main.css"));
// }

// function watch() {
//   gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
//   gulp.watch(source + "sass/**/*", mains).on("change", browserSync.reload);
//   gulp.watch(dest + "layout.hbs", html).on("change", browserSync.reload);
// }

// function server() {
//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: dest
//     }
//   });

//   gulp
//     .watch(source + "sass/**/*.scss", mains)
//     .on("change", browserSync.reload);
//   gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
//   gulp.watch(dest + "layout.hbs", html).on("change", browserSync.reload);
// }

// var build = gulp.series(gulp.parallel(js, mains, html), server, watch);

// gulp.task("default", build);
