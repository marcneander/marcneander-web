/**
 * marcneander.se nightwatch tests
 */

module.exports = {
    'Check Title and Headings': browser => {
        browser
            .url('http://web:8000')
            .waitForElementVisible('body', 1000)
            .assert.title('Marc Neander · Frontend Developer');

        browser.expect.element('.header-title-primary').text.to.equal('Marc Neander');
        browser.expect.element('.header-title-secondary').text.to.equal('FRONTEND DEVELOPER');

        browser.end();
    },

    /* eslint-disable */
    'Click arrow and expect scroll to the info section.': browser => {
        // Todo: Write the actual test
        browser.url('http://web:8000').waitForElementVisible('body', 1000);

        // We should be at the top of the page

        browser.execute(function() {
            return document.scrollingElement.scrollTop;
        }, scollPosition => {
            browser.assert.ok(scollPosition.value === 0, 'Check if we are at the top of the page.');
        });

        // Click the show more btn
        browser.click('#showMoreBtn').pause(300);

        browser.execute(function() {
            return document.scrollingElement.scrollTop;
        }, scollPosition => {
            browser.assert.ok(scollPosition.value > 0, 'Check if we are lower than top of the page.');
        });

        browser.end();
    }
    /* eslint-enable */
};
