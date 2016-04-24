'use strict';

angular
    .module('app.translate')
    .controller('TranslateController', ['$translate', '$scope', translateController]);

function translateController($translate, $scope) {
    var vm = this;

    vm.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

    vm.defaultLanguage = function () {
        return 'en';
    };
}
