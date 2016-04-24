'use strict';

describe('angular-base', function() {

    browser.get('http://localhost:3000/#!/index.html');

    it('should automatically redirect to /#!/ when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });
});
