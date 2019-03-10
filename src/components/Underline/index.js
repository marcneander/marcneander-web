import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../utils/cssVariables';

const propTypes = {
    children: PropTypes.node.isRequired,
    borderSize: PropTypes.number
};

const defaultProps = {
    borderSize: 4
};

const StyledUnderline = styled.span`
    position: relative;
    display: inline-block;
    line-height: inherit;

    &::after {
        content: '';
        position: absolute;
        bottom: -${props => Math.floor(props.borderSize / 2)}px;
        left: 0;
        height: ${props => props.borderSize}px;
        width: 100%;
        background: ${colors.yellow};
    }
`;

const Underline = props => {
    const { children, borderSize } = props;

    return <StyledUnderline borderSize={borderSize}>{children}</StyledUnderline>;
};

Underline.propTypes = propTypes;
Underline.defaultProps = defaultProps;

export default Underline;
