import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LogoType from '../../components/LogoType';
import Divider from '../../components/Divider';
import Offcanvas from '../../components/Offcanvas';
import OffcanvasButton from '../../components/OffcanvasButton';

import { colors } from '../../utils/cssVariables';

const StyledOffcanvasButton = styled(OffcanvasButton)`
    margin: 8px 0;
    margin-right: -10px;
    z-index: 505;
`;

const StyledOffcanvasLogoType = styled(LogoType.type)`
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

    &:hover,
    &:focus,
    &:active {
        color: ${colors.yellow};
        text-decoration: none;
    }
`;

class Navigation extends PureComponent {
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
            <React.Fragment>
                <StyledOffcanvasButton onClick={this.toggleOffcanvas} isOpen={offcanvasOpen} />
                <Offcanvas isOpen={offcanvasOpen}>
                    <List>
                        <li>
                            <StyledLink to="/profile" onClick={this.toggleOffcanvas}>
                                Profile
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/contact" onClick={this.toggleOffcanvas}>
                                Contact
                            </StyledLink>
                        </li>
                        <li>
                            <Divider inverse style={{ width: 30 }} />
                        </li>
                        <li>
                            <StyledLink to="/" onClick={this.toggleOffcanvas}>
                                <StyledOffcanvasLogoType />
                            </StyledLink>
                        </li>
                    </List>
                </Offcanvas>
            </React.Fragment>
        );
    }
}

export default Navigation;
