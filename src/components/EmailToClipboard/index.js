import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';

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

const Link = styled.a`
    color: ${colors.dark};
    font-weight: 700;
    padding: 8px 0;
    flex: 1;
    border-right: 1px solid ${colors.borderLight};

    &:last-child {
        border-right: none;
    }
`;

const LinkText = styled.span`
    font-size: 12px;
    padding-left: 6px;
    line-height: 18px;
    text-transform: uppercase;
`;

class EmailToClipboard extends React.Component {
    constructor(props) {
        super(props);

        this.onCopy = this.onCopy.bind(this);

        this.state = {
            copied: false
        };
    }

    onCopy() {
        clearTimeout(this.timeout);
        this.setState({
            copied: true
        });

        this.timeout = setTimeout(() => {
            this.setState({
                copied: false
            });
        }, 3500);
    }

    render() {
        const { email } = this.props;
        const { copied } = this.state;

        return (
            <Wrap>
                <EmailWrap>
                    <Email>{email}</Email>
                </EmailWrap>
                <LinksWrap>
                    <Link href={`mailto:${email}`}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <LinkText>Email</LinkText>
                    </Link>
                    <CopyToClipboard text={email} onCopy={this.onCopy}>
                        <Link href="#copy" onClick={e => e.preventDefault()}>
                            <FontAwesomeIcon icon={faCopy} />
                            <LinkText>{copied ? 'Copied!' : 'Copy'}</LinkText>
                        </Link>
                    </CopyToClipboard>
                </LinksWrap>
            </Wrap>
        );
    }
}

EmailToClipboard.propTypes = propTypes;

export default EmailToClipboard;
