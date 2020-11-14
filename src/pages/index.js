import React from 'react';
import Pill from '../components/Pill';
import Container from '../components/Container';
import Emoji from '../components/Emoji';

const Home = () => (
    <Container>
        <h1>
            Hello <Emoji symbol="👋" label="A waving hand" />
        </h1>
        <p>
            I’m Marc Neander, a freelancing Javascript/Front-end engineer based in <strong>Stockholm</strong>. I have
            been improving the web since 2006.
        </p>
        <p>
            I make sure applications are <strong>performant</strong>, <strong>accessible</strong>,{' '}
            <strong>SEO optimized</strong> and <strong>user friendly</strong>.
        </p>
        <p>
            <Pill>
                <strong>Available</strong> for hire!
            </Pill>
        </p>
    </Container>
);

export default Home;
