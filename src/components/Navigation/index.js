import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { scaleX } from '../../utils/cssAnimations';
import { colors } from '../../utils/cssVariables';

const NavWrap = styled.div`
    display: inline-block;
`;

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    line-height: 22px;
    font-weight: 500;
    position: relative;
    padding: 0.75rem 1rem;

    &:hover,
    &:active,
    &:focus {
        color: #ffffff;
        text-decoration: none;
    }

    &:active,
    &:focus {
        font-weight: 700;
    }

    &::after {
        content: attr(title);
        font-weight: 700;
        height: 0;
        overflow: hidden;
        display: block;
        visibility: hidden;
    }

    &.active {
        color: #ffffff;
        font-weight: 700;

        &::before {
            content: '';
            position: absolute;
            animation: ${scaleX} 300ms cubic-bezier(0.2, 1, 0.2, 1);
            display: block;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 50px;
            height: 3px;
            background-color: ${colors.secondary};
        }
    }
`;

const Navigation = () => {
    return (
        <NavWrap>
            <NavLink to="/profile" activeClassName="active" title="Profile">
                Profile
            </NavLink>
            <NavLink to="/contact" activeClassName="active" title="Contact">
                Contact
            </NavLink>
        </NavWrap>
    );
};

export default Navigation;
