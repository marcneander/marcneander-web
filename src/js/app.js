/**
 * marcneander.se
 */

require('../less/style.less');
const scrollToInfo = require('./scrollToInfo');

/**
 * Let run everything from a single self invoking function. The DOM should be game!
 */
(() => {
    scrollToInfo();
})();
