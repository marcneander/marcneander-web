import styled from 'styled-components';
import { colors } from '../../utils/cssVariables';

const Pill = styled.span`
    display: inline-block;
    padding: 3px 12px;
    color: #fff;
    background: ${colors.secondary};
    border-radius: 50px;
    font-weight: 700;
    margin: 2px;
`;

export default Pill;
