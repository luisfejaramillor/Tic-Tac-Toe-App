import styled from "styled-components";

export const StyledIconXo = styled.div`

 margin-inline: auto;
 display: flex;
 justify-content: center;
 gap: 8.23px;
 img{
    width: ${({theme})=> theme.imageSize.newGame};
 }
`