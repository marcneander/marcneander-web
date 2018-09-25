import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../utils/cssVariables';

const propTypes = {
    children: PropTypes.node.isRequired
};

const StyledHeader = styled.header`
    background-color: ${colors.dark};
    padding: 0 20px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 503;
`;

const Header = props => {
    const { children } = props;

    return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = propTypes;

export default Header;
