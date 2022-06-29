import React from "react";
import { ThemeProvider } from "styled-components";
import { NewGameMenu } from "./components/new-game/NewGameMenu";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import { Theme } from "./components/styles/Theme";
import { Wrapper } from "./components/styles/Wrapper";


export const TicTacToeApp = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <NewGameMenu />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
