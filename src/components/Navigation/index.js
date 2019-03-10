import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from '../Header';
import LogoType from '../LogoType';
import Offcanvas from '../../containers/Offcanvas';

const StyledLogoTypeLink = styled(Link)`
    float: left;
`;

const StyledLogoType = styled(LogoType)`
    float: left;
    margin: 16px 0;
    height: 28px;
`;

const Navigation = () => (
    <Header>
        <StyledLogoTypeLink to="/" data-cy="logo-link">
            <StyledLogoType />
        </StyledLogoTypeLink>
        <Offcanvas />
    </Header>
);

export default Navigation;
