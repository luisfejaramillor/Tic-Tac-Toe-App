import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }




  body, button{
    font-family: 'Outfit', sans-serif;
    background: #1A2A33;
  }



  h1,h2, h3, button{
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1px;
  }

  button{
    color: ${({ theme }) => theme.colors.darkNavy};
    border: none;

  }

  h1{
    font-size: clamp(1rem, 10vw, 2.5rem );
  }

  h3{
    color: ${({ theme }) => theme.colors.silver}
  }
  p{
    color: ${({ theme }) => theme.colors.silver};
    mix-blend-mode: normal;
    opacity: 0.5;
    font-weight: 500;
    letter-spacing: 0.875px;
  }
  

  
`;
