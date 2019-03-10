import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const IconBar = styled.span`
    transform-origin: 27px;
    transition: transform 0.2s, opacity 0.1s;
    opacity: 1;
    background-color: #fff;
    display: block;
    width: 29px;
    height: 3px;
    border-radius: 2px;

    & + & {
        margin-top: 6px;
    }
`;

const Button = styled.button`
    background-color: transparent;
    border-color: transparent;
    outline: 0;
    position: relative;
    float: right;
    padding: 10px;
    appearance: button;
    cursor: pointer;

    &.active {
        ${/* sc-custom 'div' */ IconBar} {
            &:nth-child(2) {
                transform: rotate(-45deg);
            }

            &:nth-child(3) {
                opacity: 0;
            }

            &:nth-child(4) {
                transform: rotate(45deg);
            }
        }
    }
`;

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
};

const defaultProps = {
    className: '',
    isOpen: false
};

const OffcanvasButton = props => {
    const { className, isOpen, onClick } = props;
    const classNames = classnames(className, isOpen && 'active');

    const buttonOnClick = useCallback(e => {
        e.preventDefault();

        onClick();
    });

    return (
        <Button type="button" onClick={buttonOnClick} className={classNames} data-cy="offcanvas-btn">
            <span className="sr-only">Toggle navigation</span>
            <IconBar />
            <IconBar />
            <IconBar />
        </Button>
    );
};

OffcanvasButton.propTypes = propTypes;
OffcanvasButton.defaultProps = defaultProps;

export default OffcanvasButton;
