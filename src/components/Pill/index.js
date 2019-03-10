import styled from 'styled-components';
import { colors } from '../../utils/cssVariables';

const Pill = styled.span`
    display: inline-block;
    padding: 4px 6px;
    color: #fff;
    background: ${colors.dark};
    border-radius: 3px;
    font-weight: 700;
    margin: 2px;
`;

export default Pill;
