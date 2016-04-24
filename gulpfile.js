/**
 * Gulp config
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var minifyHtml = require('gulp-minify-html');
var jsonminify = require('gulp-jsonminify');
var runSequence = require('run-sequence');
var gls = require('gulp-live-server');

var params = {
    sourceDir: 'app',
    targetDir: 'dist',
    npmDir: 'node_modules',
    configFile: 'config.json',
    indexPage: 'index.html',
    karmaConfFile: 'karma.conf.js',
    protractorConfigFile: 'e2e-tests/protractor.conf.js',
    protractorSenarios: ['e2e-tests/scenarios.js'],
    cleanFiles: ['dist'],
    jshintFiles: ['app.js', 'app/**/*.js', 'e2e-tests/**/*.js'],
    copyHtml: ['src/app/{modules,layout}/{,*/}*.html', '../../angular-common/common/{,*/}*.html'],
    copyAssets: 'src/assets/{images,fonts}/*',
    copyLanguages: 'src/languages/*',
    copyVendorFonts: ['node_modules/bootstrap/fonts/*', 'node_modules/font-awesome/fonts/*'],
    copyConfigDev: 'src/app/config.json',
    copyConfigProd: 'environment/prod/config.json',
    minifyHtml: ['dist/**/*.html', '!dist/layout/header.tpl.html'],
    minifyJson: ['dist/**/*.json']
};

gulp.task('clean', function () {
    return del(params.cleanFiles);
});

gulp.task('jshint', function () {
    return gulp.src(params.jshintFiles)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint());
});

gulp.task('jscs', function () {
    return gulp.src(params.jshintFiles)
        .pipe(jscs({configPath: '.jscsrc'}));
});

gulp.task('usemin', function () {
    return gulp.src('src/index.html')
        .pipe(usemin(
            {
                cssvendor: [ rev() ],
                cssapp: [ minifyCss(), rev() ],
                html: [ minifyHtml({ empty: true }) ],
                jsvendor: [ rev() ],
                jsapp: [ uglify(), rev() ]
            }
        ))
        .pipe(gulp.dest(params.targetDir));
});

gulp.task('copy-html', function () {
    return gulp.src(params.copyHtml)
        .pipe(gulp.dest(params.targetDir + '/app'));
});

gulp.task('copy-assets', function () {
    return gulp.src(params.copyAssets)
        .pipe(gulp.dest(params.targetDir + '/assets'));
});

gulp.task('copy-languages', function () {
    return gulp.src(params.copyLanguages)
        .pipe(gulp.dest(params.targetDir + '/languages'));
});

gulp.task('copy-vendor-fonts', function () {
    return gulp.src(params.copyVendorFonts)
        .pipe(gulp.dest(params.targetDir + '/assets/fonts'));
});

gulp.task('minify-html', function () {
    var opts = {
        //conditionals: true,
        //spare: true,
        //empty: true,
        //quote: true,
        //loose: true
    };

    return gulp.src(params.minifyHtml)
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest(params.targetDir));
});

gulp.task('minify-json', function () {
    return gulp.src(params.minifyJson)
        .pipe(jsonminify())
        .pipe(gulp.dest(params.targetDir));
});

gulp.task('server', function() {
    var server = gls.new(['app.js']);
    server.start();
});

gulp.task('copy', ['copy-html', 'copy-assets', 'copy-languages', 'copy-vendor-fonts']);
gulp.task('minify', ['minify-html', 'minify-json']);

gulp.task('build', function () {
    runSequence(['jshint'], ['jscs'], ['clean'], ['usemin'], ['copy'], ['minify']);
});

gulp.task('default', ['build']);
