import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedin, faTwitter, faDocker } from '@fortawesome/free-brands-svg-icons';

import { colors } from '../../utils/cssVariables';

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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    transition: all 100ms ease-out;
`;

const Link = styled.a`
    margin: 0 6px;
    font-size: 24px;
    color: ${colors.dark};

    &:hover ${StyledFontAwesomeIcon} {
        transform: scale(1.2);
    }
`;

const Footer = () => (
    <StyledFooter>
        <Paragraph>
            <Link href="https://github.com/marcneander/" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faGithub} size="1x" />
            </Link>
            <Link href="https://codepen.io/marcneander/" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faCodepen} size="1x" />
            </Link>
            <Link href="https://www.linkedin.com/in/marc-neander-789b8570/" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faLinkedin} size="1x" />
            </Link>
            <Link href="https://twitter.com/marcneander" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <Link href="https://hub.docker.com/u/marcneander/" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faDocker} size="1x" />
            </Link>
        </Paragraph>
        <Paragraph>&copy; Marc Neander 2018</Paragraph>
    </StyledFooter>
);

export default Footer;
