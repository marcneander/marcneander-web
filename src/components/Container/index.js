import styled from 'styled-components';
import { media } from '../../utils/cssVariables';

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    ${media.lg`
        width: 960px;
    `};
`;

export default Container;
