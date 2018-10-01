import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { Helmet } from 'react-helmet';
import { normalize } from 'polished';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';

import { colors } from '../utils/cssVariables';

import Rubik400Woff from '../fonts/rubik-400.woff';
import Rubik400Woff2 from '../fonts/rubik-400.woff2';
import Rubik700Woff from '../fonts/rubik-700.woff';
import Rubik700Woff2 from '../fonts/rubik-700.woff2';

/* eslint-disable */
injectGlobal`
    /* ==========================================================================
    Fonts
    ========================================================================== */
    /* rubik-regular - latin */
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        src: local('Rubik'), local('Rubik-Regular'),
            url(${Rubik400Woff2}) format('woff2'),
            url(${Rubik400Woff}) format('woff');
    }
    /* rubik-700 - latin */
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
/* eslint-enable */

const PageWrapper = styled.div`
    flex-grow: 1;
`;

const propTypes = {
    children: PropTypes.node.isRequired
};

const Layout = props => {
    const { children } = props;

    return (
        <React.Fragment>
            <Helmet defaultTitle="<MarcNeander /> - Javascript/Front-end engineer" titleTemplate="%s - <MarcNeander />">
                <html lang="en" />
                <meta name="description" content="Freelancing Javascript/Front-end engineer based in Stockholm. I make sure applications are accessible, performant, SEO optimized and user friendly." />

                {/* Favicon stuff */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24292e" />
                <meta name="msapplication-TileColor" content="#fae62d" />
                <meta name="theme-color" content="#fae62d" />

                {/* Open graph */}
                <meta property="og:image:width" content="1333" />
                <meta property="og:image:height" content="2000" />
                <meta
                    property="og:description"
                    content="Freelancing Javascript/Front-end engineer based in Stockholm. I have been improving the web since 2006.
                I make sure applications are accessible, performant, SEO optimized and user friendly."
                />
                <meta property="og:title" content="Marc Neander - Front-end/Javascript engineer" />
                <meta property="og:url" content="https://marcneander.se" />
                <meta property="og:image" content="https://marcneander.se/og-image.jpg" />
            </Helmet>
            <Navigation />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
        </React.Fragment>
    );
};

Layout.propTypes = propTypes;

export default Layout;
