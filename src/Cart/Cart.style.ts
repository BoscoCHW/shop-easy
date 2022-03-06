import styled from 'styled-components';

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 500px;
    padding: 20px;

    .closeButton {
        display: none;
    }

    @media screen and (max-width: 520px) {
        width: 100%;

        .closeButton {
            display: inline;
            float: right;
        }
    }
`;