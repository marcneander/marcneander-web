import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Underline from '../components/Underline';
import Emoji from '../components/Emoji';

import { media } from '../utils/cssVariables';

const Section = styled.section`
    text-align: center;
    padding-top: 120px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 140px;
    `};
`;

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
    letter-spacing: -3px;

    ${media.lg`
        font-size: 80px;
    `};
`;

const FouroFour = () => (
    <React.Fragment>
        <Helmet>
            <title>404</title>
        </Helmet>
        <Section>
            <Container>
                <Title>
                    <Underline>404</Underline>
                </Title>
                <p>
                    Oh noes! <Emoji label="sadface" symbol="😞" />
                    <br />
                    Page not found.
                </p>
            </Container>
        </Section>
    </React.Fragment>
);

export default FouroFour;
