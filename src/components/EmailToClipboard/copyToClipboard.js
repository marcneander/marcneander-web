import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, LinkText, Icon } from './index';
import copyIcon from '../../images/icons/copy-solid.svg';

const propTypes = {
    email: PropTypes.string.isRequired
};

const EmailToClipboard = React.memo(({ email }) => {
    const [copied, setCopied] = useState(false);
    let timeout;

    const onCopy = () => {
        clearTimeout(timeout);
        setCopied(true);
        timeout = setTimeout(() => {
            setCopied(false);
        }, 3500);
    };

    return (
        <CopyToClipboard text={email} onCopy={onCopy}>
            <Link
                href="#copy"
                onClick={e => {
                    e.preventDefault();
                }}
            >
                <Icon src={copyIcon} alt="Copy icon" />
                <LinkText>{copied ? 'Copied!' : 'Copy'}</LinkText>
            </Link>
        </CopyToClipboard>
    );
});

EmailToClipboard.propTypes = propTypes;

export default EmailToClipboard;
