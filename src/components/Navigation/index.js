import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from '../Header';
import LogoType from '../LogoType';
import Offcanvas from '../../containers/Offcanvas';

const StyledLogoTypeLink = styled(Link)`
    float: left;
`;

const StyledLogoType = styled(LogoType.type)`
    float: left;
    margin: 16px 0;
    height: 28px;
`;

const Navigation = React.memo(
    () => (
        <Header>
            <StyledLogoTypeLink to="/">
                <StyledLogoType />
            </StyledLogoTypeLink>
            <Offcanvas />
        </Header>
    ),
    () => true
);

export default Navigation;
