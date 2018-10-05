/* eslint-disable react/prop-types */
import React from 'react';
import GlobalStyle from './src/components/GlobalStyle';

export default {
    wrapRootElement: ({ element }) => <React.Fragment><GlobalStyle />{element}</React.Fragment>
};

