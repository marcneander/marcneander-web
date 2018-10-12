import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { colors } from '../../utils/cssVariables';

const GlobalStyle = createGlobalStyle`
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
