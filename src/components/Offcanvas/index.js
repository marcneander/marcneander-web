import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { sneakIn, sneakOut } from '../../utils/keyframes';
import { colors } from '../../utils/cssVariables';

const propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node
};

const defaultProps = {
    isOpen: false,
    children: undefined
};

const timeout = {
    enter: 430,
    exit: 240
};

const StyledOffcanvas = styled.div`
    background-color: ${colors.dark};
    display: none;
    height: 100%;
    width: 100%;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    /* stylelint-disable-next-line */
    -webkit-backface-visibility: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 504;
    padding: 90px 10px 40px;
    box-sizing: border-box;

    &.offcanvas-enter,
    &.offcanvas-exit,
    &.offcanvas-enter-done {
        display: block;
    }

    &.offcanvas-enter-active {
        animation-name: ${sneakIn};
        animation-duration: 430ms;
        animation-timing-function: linear;
        animation-direction: normal;
        animation-delay: 0s;
    }

    &.offcanvas-exit-active {
        animation-name: ${sneakOut};
        animation-duration: 240ms;
        animation-timing-function: linear;
        animation-direction: normal;
        animation-delay: 0s;
        animation-fill-mode: forwards;
    }

    &.offcanvas-enter-done {
        transform: translate(0, 0);
    }
`;

const Offcanvas = props => {
    const { isOpen, children } = props;

    return (
        <CSSTransition in={isOpen} timeout={timeout} classNames="offcanvas">
            {() => <StyledOffcanvas>{children}</StyledOffcanvas>}
        </CSSTransition>
    );
};

Offcanvas.propTypes = propTypes;
Offcanvas.defaultProps = defaultProps;

export default Offcanvas;
