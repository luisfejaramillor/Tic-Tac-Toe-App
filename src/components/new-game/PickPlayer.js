import React from 'react'
import { IconOPick } from '../styles/IconOPick'
import { IconXPick } from '../styles/IconXPick'

import { StyledPickPlayer } from '../styles/PickPlayer.styled'





export const PickPlayer = () => {
  return (
    <StyledPickPlayer>
      <h3>PICK PLAYER 1’S MARK</h3>
      <div>
        <div>
          <IconXPick src="./assets/icon-x-pick.svg"  alt="" fill="#F2B137" />
        </div>
        <div>
          <IconOPick src="./assets/icon-o-pick.svg"  alt="" fill="#fff" />
        </div>
      </div>
      <p>REMEMBER : X GOES FIRST</p>
    </StyledPickPlayer>
  )
}
