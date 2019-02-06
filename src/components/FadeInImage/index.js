import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const timeout = 250;

const Img = styled.img`
    opacity: 0;
    transition: opacity ${timeout}ms ease-in-out;

    &.fadein-img-enter,
    &.fadein-img-exit,
    &.fadein-img-exit-active {
        opacity: 0;
    }

    &.fadein-img-enter-done,
    &.fadein-img-enter-active {
        opacity: 1;
    }
`;

const FadeInImage = props => {
    const [loaded, setLoaded] = useState(false);

    return (
        <CSSTransition in={loaded} timeout={timeout} classNames="fadein-img">
            {() => (
                <Img
                    {...props}
                    alt={props.alt}
                    onLoad={() => {
                        setLoaded(true);
                    }}
                />
            )}
        </CSSTransition>
    );
};

export default FadeInImage;
