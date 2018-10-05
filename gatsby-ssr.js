/* eslint-disable react/prop-types */
import React from 'react';
import GlobalStyle from './src/components/GlobalStyle';

export const wrapRootElement = ({ element }) => <React.Fragment><GlobalStyle />{element}</React.Fragment>;

export default {
    wrapRootElement
};

