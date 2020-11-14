import styled from 'styled-components';
import { media } from '../../utils/cssVariables';

const Container = styled.div`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 40px;

    ${media.lg`
        width: 600px;
    `};
`;

export default Container;
