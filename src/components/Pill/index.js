import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../utils/cssVariables';

const propTypes = {
    children: PropTypes.node.isRequired
};

const StyledPill = styled.span`
    display: inline-block;
    padding: 4px 6px;
    color: #fff;
    background: ${colors.dark};
    border-radius: 3px;
    font-weight: 700;
    margin: 4px;
`;

const Pill = props => {
    const { children } = props;

    return <StyledPill>{children}</StyledPill>;
};

Pill.propTypes = propTypes;

export default Pill;
