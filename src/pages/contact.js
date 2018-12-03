import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Title from '../components/Title';
import EmailToClipboard from '../components/EmailToClipboard';
import Underline from '../components/Underline';

import { media } from '../utils/cssVariables';

const Section = styled.section`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 120px;
    `};
`;

const Contact = React.memo(() => (
    <React.Fragment>
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <Section>
            <Container>
                <Title>
                    <Underline>Contact</Underline>
                </Title>
                <EmailToClipboard email="marcneander@gmail.com" />
            </Container>
        </Section>
    </React.Fragment>
));

export default Contact;
