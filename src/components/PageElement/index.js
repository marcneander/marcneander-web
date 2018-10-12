import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../GlobalStyle';
import './style.css';

const propTypes = {
    element: PropTypes.node.isRequired
};

const PageElement = props => {
    const { element } = props;

    return (
        <React.Fragment>
            <GlobalStyle />
            {element}
        </React.Fragment>
    );
};

PageElement.propTypes = propTypes;

export default PageElement;
