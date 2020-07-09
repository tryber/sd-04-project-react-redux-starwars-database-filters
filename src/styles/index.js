import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    color: white;
    margin: 0;
    padding: 0;
  }
`;
export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  heigth: 15vh;
  justify-content: space-around;
`;
