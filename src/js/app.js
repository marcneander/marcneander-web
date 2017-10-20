/**
 * marcneander.se
 */

require('../less/style.less');
const scrollToInfo = require('./scrollToInfo');
const goodbyeTitle = require('./goodbyeTitle');

/**
 * Let run everything from a single self invoking function. The DOM should be game!
 */
(() => {
    scrollToInfo();
    goodbyeTitle();
})();
