import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, LinkText, Icon } from './index';
import copyIcon from '../../images/icons/copy-solid.svg';

const propTypes = {
    email: PropTypes.string.isRequired
};

class EmailToClipboard extends React.PureComponent {
    static preventDefault(e) {
        e.preventDefault();
    }

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
            <CopyToClipboard text={email} onCopy={this.onCopy}>
                <Link href="#copy" onClick={EmailToClipboard.preventDefault}>
                    <Icon src={copyIcon} alt="Copy icon" />
                    <LinkText>{copied ? 'Copied!' : 'Copy'}</LinkText>
                </Link>
            </CopyToClipboard>
        );
    }
}

EmailToClipboard.propTypes = propTypes;

export default EmailToClipboard;
