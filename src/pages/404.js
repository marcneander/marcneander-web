import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Emoji from '../components/Emoji';

const FouroFour = () => (
    <React.Fragment>
        <Helmet>
            <title>404</title>
        </Helmet>
        <Container>
            <h1>404</h1>
            <p>
                Oh noes! <Emoji label="sadface" symbol="😞" />
                <br />
                Page not found.
            </p>
        </Container>
    </React.Fragment>
);

export default FouroFour;
