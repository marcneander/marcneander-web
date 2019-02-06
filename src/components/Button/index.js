import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { omit } from '../../utils';
import { colors } from '../../utils/cssVariables';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

const defaultProps = {
    className: '',
    disabled: false,
    onClick: () => {},
    component: 'button'
};

const Button = props => {
    const buttonOnClick = e => {
        const { disabled, onClick } = props;

        if (disabled) {
            e.preventDefault();
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    const { className, children, disabled, ...attributes } = omit(props, ['component']);
    let { component: Component } = props;

    if (attributes.href && Component === 'button') {
        Component = 'a';
    }

    return (
        <Component disabled={disabled} className={className} onClick={buttonOnClick} {...attributes}>
            {children}
        </Component>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

const StyledButton = styled(Button)`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: none;
    white-space: nowrap;
    user-select: none;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 17px 48px;
    transition-property: background-color, color;
    transition-duration: 0.3s;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${colors.dark};
    background-color: ${colors.yellow};
    outline: none;

    &:hover,
    &:focus {
        background-color: ${colors.yellowHover};
        text-decoration: none;
    }
`;

export default StyledButton;
