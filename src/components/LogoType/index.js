import React from 'react';
import logo from '../../images/m.svg';

const LogoType = (props) => {
    const { className } = props;

    return <img className={className} src={logo} alt="Marc Neander logotype" />;
};

export default LogoType;
