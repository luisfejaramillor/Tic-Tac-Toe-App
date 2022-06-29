import styled from "styled-components";

export const StyledNewGameButtons = styled.div`
  display: flex;
  flex-direction: column;

  > button:first-child {
    background-color: ${({ theme }) => theme.colors.lightYellow};
    box-shadow: inset 0px -8px 0px #cc8b13;
  }

  button {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    box-shadow: inset 0px -8px 0px #118c87;
    border-radius: 15px;
  }
`;
