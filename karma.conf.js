// Karma configuration
// Generated on Mon Oct 19 2015 19:27:57 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/app/app.js',
            'src/app/modules/**/!(*-*).js',
            'src/app/modules/**/*-service.js',
            'src/app/modules/**/*-controller.js',
            'src/app/modules/**/*-filter.js',
            'src/app/modules/**/*-directive.js',
            'src/app/modules/**/*.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    })
}
