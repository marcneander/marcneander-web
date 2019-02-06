import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from '../components/Container';
import Underline from '../components/Underline';
import Button from '../components/Button';

import { media } from '../utils/cssVariables';

const Section = styled.section`
    text-align: center;
    padding-top: 120px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 160px;
    `};
`;

const Title = styled.h1`
    font-size: 48px;
    letter-spacing: -3px;

    ${media.lg`
        font-size: 80px;
    `};
`;

const SubTitle = styled.h2`
    font-size: 18px;
    margin-top: 12px;
    line-height: 1.5;
    font-weight: 400;
`;

const StyledButton = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;

    ${media.md`
        display: inline-block;
        margin: 0 6px;
    `};
`;

const ButtonWrapper = styled.div`
    margin-top: 36px;
`;

const Home = React.memo(() => (
    <Section>
        <Container>
            <Title>
                <Underline>I’m</Underline> Marc Neander
            </Title>
            <SubTitle>
                Consultant Javascript/Front-end engineer based in <strong>Stockholm</strong>. I have been improving the
                web since 2006.
                <br />I make sure applications are <strong>accessible</strong>, <strong>performant</strong>,{' '}
                <strong>SEO optimized</strong> and <strong>user friendly</strong>.<br />
                <br />
                <strong>Unavailable</strong> for hire until after summer, 2019.
            </SubTitle>
            <ButtonWrapper>
                <StyledButton component={Link} to="/contact" data-cy="contact-link">
                    Get in touch?
                </StyledButton>
                <StyledButton component={Link} to="/profile" data-cy="profile-link">
                    View profile
                </StyledButton>
            </ButtonWrapper>
        </Container>
    </Section>
));

export default Home;
