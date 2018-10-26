import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CopyToClipboard from './copyToClipboard';

import emailIcon from '../../images/icons/envelope-solid.svg';

import { colors, media } from '../../utils/cssVariables';

const propTypes = {
    email: PropTypes.string.isRequired
};

const Wrap = styled.div`
    color: ${colors.dark};
    display: inline-block;
`;

const EmailWrap = styled.div`
    padding: 16px 30px;
`;

const Email = styled.h3`
    margin: 0;
    font-size: 18px;

    ${media.md`
        font-size: 24px;
    `};
`;

const LinksWrap = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid ${colors.borderLight};
`;

export const Link = styled.a`
    color: ${colors.dark};
    font-weight: 700;
    line-height: 18px;
    padding: 8px 0;
    flex: 1;
    border-right: 1px solid ${colors.borderLight};

    &:last-child {
        border-right: none;
    }
`;

export const LinkText = styled.span`
    display: inline-block;
    font-size: 12px;
    padding-left: 6px;
    text-transform: uppercase;
`;

export const Icon = styled.img`
    height: 18px;
    vertical-align: middle;
    display: inline-block;
`;

const EmailToClipboard = React.memo(({ email }) => (
    <Wrap>
        <EmailWrap>
            <Email>{email}</Email>
        </EmailWrap>
        <LinksWrap>
            <Link href={`mailto:${email}`}>
                <Icon src={emailIcon} alt="Email icon" />
                <LinkText>Email</LinkText>
            </Link>
            <CopyToClipboard email={email} />
        </LinksWrap>
    </Wrap>
));

EmailToClipboard.propTypes = propTypes;

export default EmailToClipboard;
