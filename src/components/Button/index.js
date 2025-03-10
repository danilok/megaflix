import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const Button = styled.button`
const Button = styled(Link)` /* Quando quiser um componente no styled-component usa entre () e fazer import */
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--background);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    .&:hover,
    .&:focus {
        opacity: .5;
    }
`;

export default Button;
