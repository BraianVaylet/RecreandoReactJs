import styled from '../../lib/styled-components/index.js'

export const UserStyled = styled.div`
  background-image: linear-gradient(to bottom, ${({ primaryColor }) => primaryColor} 0%, ${({ primaryColor }) => primaryColor} 130px,${({ tertiaryColor }) => tertiaryColor} 130px, ${({ tertiaryColor }) => tertiaryColor} 131px, ${({ secondaryColor }) => secondaryColor} 131px, ${({ secondaryColor}) => secondaryColor} 100%);
  /* background: ${(props) => props.primaryColor}; */
  color: ${({ fontColor }) => fontColor} ;
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  cursor: pointer;
  user-select: none;
`

export const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 7px solid white;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 2px black;
`


