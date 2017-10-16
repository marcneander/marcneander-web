/**
 * Scrolls users down to the info section.
 */

const animatedScrollTo = require('animated-scrollto');

const scrollToInfo = () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const target = document.getElementById('info');

    if (showMoreBtn && target) {
        showMoreBtn.addEventListener('click', event => {
            event.preventDefault();

            animatedScrollTo(document.scrollingElement, target.offsetTop, 250);
        });
    }
};

module.exports = scrollToInfo;
