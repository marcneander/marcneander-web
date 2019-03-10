import styled from 'styled-components';
import { colors } from '../../utils/cssVariables';

const Header = styled.header`
    background-color: ${colors.dark};
    /* stylelint-disable-next-line */
    -webkit-backface-visibility: hidden;
    padding: 0 20px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 503;
`;

export default Header;
