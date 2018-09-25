import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    width: PropTypes.number,
    inverse: PropTypes.bool
};

const defaultProps = {
    width: 20,
    inverse: false
};

const StyledDivider = styled.span`
    display: inline-block;
    height: 2px;
    margin: 30px 15px;
    background: ${props => (props.inverse ? '#fdf6e3' : '#293440')};
`;

const Divider = props => {
    const { width, inverse } = props;

    return <StyledDivider style={{ width }} inverse={inverse} />;
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
