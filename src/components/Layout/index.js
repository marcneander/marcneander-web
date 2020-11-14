import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import GlobalStyle from '../GlobalStyle';
import '../../font.css';

const Banner = styled.div`
    width: 100%;
    height: 8px;
    background: #424250;
`;

const Layout = (props) => {
    const { children } = props;

    return (
        <React.Fragment>
            <GlobalStyle />
            <Helmet defaultTitle="Marc Neander - Javascript/Front-end engineer" titleTemplate="%s - marcneander.com">
                <html lang="en" />
                <meta
                    name="description"
                    content="Freelancing Javascript/Front-end engineer based in Stockholm. I make sure applications are accessible, performant, SEO optimized and user friendly."
                />

                {/* Favicon stuff */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#33343d" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                {/* Open graph */}
                <meta
                    property="og:description"
                    content="Freelancing Javascript/Front-end engineer based in Stockholm. I have been improving the web since 2006.
                I make sure applications are accessible, performant, SEO optimized and user friendly."
                />
                <meta property="og:title" content="Marc Neander - Front-end/Javascript engineer" />
                <meta property="og:url" content="https://marcneander.io" />
            </Helmet>
            <Banner />
            <Header />
            {children}
        </React.Fragment>
    );
};

export default Layout;
