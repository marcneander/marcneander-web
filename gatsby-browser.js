import PageElement from './src/components/PageElement';
import goodbyeTitle from './src/utils/goodbyeTitle';

export const onClientEntry = () => {
    // Fixes :active state on IOS devices
    // https://developers.google.com/web/fundamentals/design-and-ux/input/touch/
    window.onload = () => {
        if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
            document.body.addEventListener('touchstart', () => {}, false);
        }
    };

    goodbyeTitle();
};

export const wrapPageElement = PageElement;
