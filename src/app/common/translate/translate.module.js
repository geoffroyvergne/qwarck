(function (angular) {
    'use strict';

    angular
        .module('app.translate', ['pascalprecht.translate', 'ngCookies'])
        .config(['$translateProvider', '$languageProvider', translateAppConfig]);

    function translateAppConfig($translateProvider, $languageProvider) {
        $translateProvider.useCookieStorage();

        var configs = {
            files: [
                {prefix: 'languages/', suffix: '.json'}
            ]};

        var langs = ['en', 'fr'];

        $translateProvider.useStaticFilesLoader(configs);
        $translateProvider.preferredLanguage($languageProvider.$get(langs));
        $translateProvider.useSanitizeValueStrategy('escaped');
    }
})(angular);
