import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

const Emoji = ({ symbol, label }) => (
    <span role="img" aria-label={label || ''} aria-hidden={label ? 'false' : 'true'}>
        {symbol}
    </span>
);

Emoji.propTypes = propTypes;

export default Emoji;
