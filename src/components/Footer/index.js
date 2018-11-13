import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/cssVariables';

import githubIcon from '../../images/icons/github-brands.svg';
import npmIcon from '../../images/icons/npm-brands.svg';
import twitterIcon from '../../images/icons/twitter-brands.svg';

const StyledFooter = styled.footer`
    position: relative;
    padding: 20px 16px;
    text-align: center;
    font-size: 14px;
`;

const Paragraph = styled.p`
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 8px;
`;

const Icon = styled.img`
    height: 22px;
    transition: all 100ms ease-out;
`;

const Link = styled.a`
    margin: 0 6px;
    font-size: 24px;
    color: ${colors.dark};

    &:hover ${Icon} {
        transform: scale(1.2);
    }
`;

const Footer = React.memo(() => (
    <StyledFooter>
        <Paragraph>
            <Link href="https://github.com/marcneander/" target="_blank" rel="noopener noreferrer">
                <Icon src={githubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.npmjs.com/~marcneander" target="_blank" rel="noopener noreferrer">
                <Icon src={npmIcon} alt="npmjs Icon" />
            </Link>
            <Link href="https://twitter.com/marcneander" target="_blank" rel="noopener noreferrer">
                <Icon src={twitterIcon} alt="Twitter Icon" />
            </Link>
        </Paragraph>
        <Paragraph>&copy; Marc Neander 2018</Paragraph>
    </StyledFooter>
));

export default Footer;
