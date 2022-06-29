import { StyledNewGameMenu } from '../styles/NewGameMenu.styled'
import { IconXo } from './IconXo'
import { NewGameButtons } from './NewGameButtons'
import { PickPlayer } from './PickPlayer'

export const NewGameMenu = () => {
  return (
    <StyledNewGameMenu>
      <IconXo/>
      <PickPlayer/>
      <NewGameButtons/>
    </StyledNewGameMenu>
  )
}
