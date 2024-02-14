import styled, { css } from 'styled-components'

const buttonStyles = css`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 500px;
  background-color: #00ff08;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
  }
  &:active {
    opacity: 0.8;
  }
`

export const ButtonContato = styled.button`
  ${buttonStyles}
`

export const ButtonTest = styled.button`
  ${buttonStyles}
  padding: 10px 30px;
  width: 200px;

  @media screen and (max-width: 1100px) {
    width: 200px;
  }
`
