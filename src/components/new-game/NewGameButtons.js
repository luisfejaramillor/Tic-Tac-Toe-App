import React from 'react'
import { StyledNewGameButtons } from '../styles/NewGameButtons.styled'


export const NewGameButtons = () => {
  return (
    <StyledNewGameButtons>
      <button>NEW GAME (VS CPU)</button>
      <button>NEW GAME  (VS PLAYER)</button>
    </StyledNewGameButtons>
  )
}
