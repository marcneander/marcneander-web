import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Navigation from '../Navigation';
import Footer from '../Footer';

const PageWrapper = styled.div`
    flex-grow: 1;
`;

const propTypes = {
    children: PropTypes.node.isRequired
};

const Layout = React.memo(props => {
    const { children, pageContext } = props;

    return (
        <React.Fragment>
            <Helmet defaultTitle="<MarcNeander /> - Javascript/Front-end engineer" titleTemplate="%s - <MarcNeander />">
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
                <meta property="og:url" content="https://marcneander.io" />
                <meta property="og:image" content="https://marcneander.io/og-image.jpg" />
            </Helmet>
            {!pageContext.hideLayout ? <Navigation /> : ''}
            <PageWrapper>{children}</PageWrapper>
            {!pageContext.hideLayout ? <Footer /> : ''}
        </React.Fragment>
    );
});

Layout.propTypes = propTypes;

export default Layout;
