'use strict';

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'scenarios.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
