import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(87.2%, 30rem);

  @media (min-width: 30rem) {
    width: min(59.89%, ${({ theme }) => theme.sizeScreen.tablet});
  }

  @media (min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
    width: 31.94%;
  }

`
