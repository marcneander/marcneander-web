import styled from 'styled-components';

const Divider = styled.span`
    display: inline-block;
    height: 2px;
    margin: 30px 15px;
    background-color: ${props => (props.inverse ? '#fdf6e3' : '#293440')};
`;

export default Divider;
