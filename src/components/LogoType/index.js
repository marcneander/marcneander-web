import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/m.svg';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const LogoType = props => {
    const { className } = props;

    return <img className={className} src={logo} alt="Marc Neander logotype" />;
};

LogoType.propTypes = propTypes;
LogoType.defaultProps = defaultProps;

export default LogoType;
