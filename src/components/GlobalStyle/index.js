import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { colors } from '../../utils/cssVariables';

import Rubik400Woff from '../../fonts/rubik-400.woff';
import Rubik400Woff2 from '../../fonts/rubik-400.woff2';
import Rubik700Woff from '../../fonts/rubik-700.woff';
import Rubik700Woff2 from '../../fonts/rubik-700.woff2';


const GlobalStyle = createGlobalStyle`
/* ==========================================================================
Fonts
========================================================================== */

@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local('Rubik'), local('Rubik-Regular'),
        url(${Rubik400Woff2}) format('woff2'),
        url(${Rubik400Woff}) format('woff');
}

@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: local('Rubik Bold'), local('Rubik-Bold'),
        url(${Rubik700Woff2}) format('woff2'),
        url(${Rubik700Woff}) format('woff');
}

/* ==========================================================================
Normalize
========================================================================== */
${normalize()}

/* ==========================================================================
Base stylesheet
========================================================================== */

html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Rubik', Helvetica, sans-serif;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: ${colors.dark};
}

#___gatsby,
#___gatsby > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

/* ==========================================================================
Typeography
========================================================================== */

a {
    color: ${colors.linkColor};
    text-decoration: none;

    &:hover,
    &:focus {
        text-decoration: underline;
        outline: none;
    }
}

strong {
    font-weight: 700;
}

h1, h2, h3 {
    margin: 0 0 16px;
    font-size: 24px;
    line-height: 1.2;
}

h4, h5, h6 {
    margin: 0 0 12px;
    font-size: 20px;
    line-height: 1.4;
}

p {
    margin: 0 0 26px;

    &:last-child {
        margin: 0;
    }
}
`;

export default GlobalStyle;
