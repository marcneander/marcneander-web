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
    dark: '#24292e',
    yellow: '#fae62d',
    yellowHover: '#d8c305',
    borderLight: '#e4e4e4',
    linkColor: '20a2ff'
};
