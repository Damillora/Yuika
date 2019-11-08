const {series, watch, src, dest, parallel} = require('gulp');

const postcss = require('gulp-postcss')
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function serve(done) {
    livereload.listen();
    done();
}

function hbs() { 
    return src(['*.hbs', 'partials/**/*.hbs'])
        .pipe(livereload());
}
function css () {

  return src('assets/css/styles.css')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(dest('assets/built/'))
    .pipe(livereload())
}
function js() {
    return src([
            // pull in lib files first so our own code can depend on it
            'assets/js/lib/*.js',
            'assets/js/*.js'
        ], {sourcemaps: true})
        .pipe(concat('yuika.js'))
        .pipe(uglify())
        .pipe(dest('assets/built/', {sourcemaps: '.'}))
        .pipe(livereload());
}

const cssWatcher = () => watch('assets/css/**', css);
const jsWatcher = () => watch('assets/js/**.js', js);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher, jsWatcher);
const build = parallel(css,js);
const dev = series(build, serve, watcher);


function zipper(done) {
    const targetDir = 'dist/';
    const themeName = require('./package.json').name;
    const filename = themeName + '.zip';

    return src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ])
        .pipe(zip(filename))
        .pipe(dest(targetDir));
}

exports.zip = series(build, zipper);
exports.dev = dev;
exports.default = build;

