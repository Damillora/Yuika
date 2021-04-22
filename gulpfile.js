const { series, watch, src, dest, parallel } = require('gulp');

const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const webpack = require('webpack-stream');

function serve(done) {
    livereload.listen();
    done();
}

function hbs() {
    return src(['*.hbs', 'partials/**/*.hbs'])
        .pipe(livereload());
}
function css() {

    return src('assets/css/styles.css')
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(dest('assets/built/'))
        .pipe(livereload())
}
function js() {
    return src('assets/js/index.js')
        .pipe(
            webpack({
                mode: 'production'
                // Any configuration options...
            })
        )
        .pipe(concat('yuika.js'))
        .pipe(uglify())
        .pipe(dest('assets/built/', { sourcemaps: '.' }))
        .pipe(livereload());
}

const cssWatcher = () => watch('assets/css/**', css);
const jsWatcher = () => watch('assets/js/**.js', js);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher, jsWatcher);
const build = parallel(css, js);
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

exports.build = build;
exports.zip = series(build, zipper);
exports.dev = dev;
exports.default = build;

