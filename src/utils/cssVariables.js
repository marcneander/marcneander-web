import { css } from 'styled-components';

export const breakpoints = {
    lg: '992px',
    md: '632px',
    sm: '407px'
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${breakpoints[label]}) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

export const colors = {
    link: '#10e094',
    primary: '#33343d',
    secondary: '#1fb980'
};
