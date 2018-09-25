import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../utils/cssVariables';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const StyledContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    ${media.lg`
        width: 960px;
    `};
`;

const Container = props => {
    const { children, className } = props;

    return <StyledContainer className={className}>{children}</StyledContainer>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
