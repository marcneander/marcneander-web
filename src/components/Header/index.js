import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LogoType from '../LogoType';
import Navigation from '../Navigation';

const Wrap = styled.header`
    display: flex;
    justify-content: center;
    margin-top: 12px;
`;

const LogotypeLink = styled(Link)`
    display: inline-block;
    padding: 7px;
    margin-right: 16px;

    img {
        display: block;
    }
`;

const Header = () => {
    return (
        <Wrap>
            <LogotypeLink to="/">
                <LogoType />
            </LogotypeLink>
            <Navigation />
        </Wrap>
    );
};

export default Header;
