import { keyframes } from 'styled-components';

export const sneakIn = keyframes`
    0% {
        opacity: 0;
        transform: translate(100px, 0);
        animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
    }

    75% {
        opacity: 1;
        transform: translate(0, 0);
        animation-timing-function: linear;
    }

    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`;

export const sneakOut = keyframes`
    0% {
        opacity: 1;
        transform: translate(0, 0);
        animation-timing-function: cubic-bezier(1, 0, 0.7, 1);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(100px, 0);
    }
`;

export const bounce = keyframes`
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
`;