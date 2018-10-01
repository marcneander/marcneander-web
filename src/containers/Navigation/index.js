import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from '../../components/Header';
import LogoType from '../../components/LogoType';
import Divider from '../../components/Divider';
import Offcanvas from '../../components/Offcanvas';
import OffcanvasButton from '../../components/OffcanvasButton';

import { sneakIn } from '../../utils/keyframes';
import { colors } from '../../utils/cssVariables';

const StyledLogoTypeLink = styled(Link)`
    float: left;
`;

const StyledLogoType = styled(LogoType)`
    float: left;
    margin: 16px 0;
    height: 28px;
`;

const StyledOffcanvasButton = styled(OffcanvasButton)`
    margin: 8px 0;
    margin-right: -10px;
    z-index: 505;
`;

const StyledOffcanvasLogoType = styled(LogoType)`
    width: 40px;
    height: 23px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;
    list-style-type: none;
`;

const StyledLink = styled(Link)`
    display: block;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    font-size: 42px;
    font-weight: 700;
    padding-bottom: 25px;
    opacity: 0;

    &:hover,
    &:focus,
    &:active {
        color: ${colors.yellow};
        text-decoration: none;
    }

    .offcanvas-enter-active & {
        animation-name: ${sneakIn};
        animation-duration: 430ms;
        animation-timing-function: linear;
        animation-direction: normal;
        animation-delay: 0s;
    }

    .offcanvas-enter-done & {
        opacity: 1;
    }
`;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleOffcanvas = this.toggleOffcanvas.bind(this);

        this.state = {
            offcanvasOpen: false
        };
    }

    toggleOffcanvas() {
        this.setState(prevState => ({
            offcanvasOpen: !prevState.offcanvasOpen
        }));
    }

    render() {
        const { offcanvasOpen } = this.state;

        return (
            <Header>
                <StyledLogoTypeLink to="/">
                    <StyledLogoType />
                </StyledLogoTypeLink>
                <StyledOffcanvasButton onClick={this.toggleOffcanvas} isOpen={offcanvasOpen} />
                <Offcanvas isOpen={offcanvasOpen}>
                    <List>
                        <li>
                            <StyledLink to="/profile" onClick={this.toggleOffcanvas} style={{ animationDelay: '30ms' }}>
                                Profile
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/contact" onClick={this.toggleOffcanvas} style={{ animationDelay: '60ms' }}>
                                Contact
                            </StyledLink>
                        </li>
                        <li>
                            <Divider inverse width={30} />
                        </li>
                        <li>
                            <StyledLink to="/" onClick={this.toggleOffcanvas} style={{ animationDelay: '120ms' }}>
                                <StyledOffcanvasLogoType />
                            </StyledLink>
                        </li>
                    </List>
                </Offcanvas>
            </Header>
        );
    }
}

export default Navigation;
