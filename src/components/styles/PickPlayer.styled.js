import styled from "styled-components";
export const StyledPickPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semiDarkNay};
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  & > div {
    background-color: ${({ theme }) => theme.colors.darkNavy};
    width: 85.32%;
    border-radius: 10px;
    display: flex;
    div {
      flex: 1;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      
      img {
        width: ${({theme})=> theme.imageSize.newGame};
       /*  filter: invert(81%) sepia(33%) saturate(100%) hue-rotate(153deg) brightness(0%) contrast(85%); */
      }
    }
    & > :last-child {
      background-color: ${({ theme }) => theme.colors.silver};

    }

  }
`;
