import { BsList } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'

import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const ContainerBsList = styled.div``

export const List = styled(BsList)`
  color: #00ff00;
  font-size: 40px;
  display: none;

  @media ${breakpoints.bg} {
    display: block;
  }
`

export const ContainerItens = styled.div`
  background-color: #000;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  width: ${(props) => (props.$menu ? '70%' : '0%')};
  overflow: hidden;
  transition: 0.5s;
`
export const ContainerFiX = styled.div`
  padding: 20px 6%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`

export const Fix = styled(FiX)`
  color: #00ff00;
  font-size: 20px;
`

export const Menu = styled.div`
  list-style: none;
  text-align: right;
`

export const Li = styled.li`
  a {
    padding: 20px 6%;
    font-size: 20px;
    color: #fff;
    text-decoration: none;

    display: block;

    &:hover {
      background-color: #00ff00;
      color: #000;
    }
  }
`
export const ContainerOverlay = styled.div`
  background-color: #000000a7;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  display: ${(props) => (props.$menu ? 'block' : 'none')};
`
