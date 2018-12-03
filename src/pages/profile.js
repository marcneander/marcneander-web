import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Container from '../components/Container';
import Underline from '../components/Underline';
import Title from '../components/Title';
import Button from '../components/Button';
import { Skills, About, Experience } from '../containers/Text';
import { media } from '../utils/cssVariables';

import marc from '../images/marc.svg';

const Section = styled.section`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 120px;
    `};
`;

const Image = styled.img`
    display: block;
    margin: 50px auto;
    height: 300px;
`;

const StyledButton = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;

    ${media.md`
        display: inline-block;
    `};
`;

const StyledContainer = styled(Container)`
    ${media.md`
        width: 600px;
    `};
`;

const Profile = React.memo(() => (
    <React.Fragment>
        <Helmet>
            <title>Profile</title>
        </Helmet>
        <Section>
            <StyledContainer>
                <Title>
                    <Underline>Profile</Underline>
                </Title>
                <Image src={marc} alt="Marc Neander cartoon" />
                <About />
                <Skills />
                <Experience />
                <StyledButton component={Link} to="contact">
                    Contact me
                </StyledButton>
            </StyledContainer>
        </Section>
    </React.Fragment>
));

export default Profile;
