import { Link } from 'react-router-dom'

import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  padding: 40px 4%;

  @media ${breakpoints.md} {
    padding: 20px 6%;
  }
`

export const Button = styled(Link)`
  color: #00ff00;
  font-size: 40px;
  text-decoration: none;
  display: flex;
  width: 40px;
  border-radius: 40px;

  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    box-shadow: 0px 0px 8px #00ff08;
  }

  &:active {
    opacity: 0.8;
  }

  @media ${breakpoints.sm} {
    font-size: 20px;
    width: 20px;
    border-radius: 20px;
  }
`

export const ContainerItens = styled.div`
  padding: 40px 4%;
  display: flex;
  justify-content: center;
  gap: 50px;

  img {
    width: 50%;
    border-radius: 30px;
  }

  @media ${breakpoints.bg} {
    flex-direction: column;
    align-items: center;

    img {
      width: 300px;
    }
  }
`
export const ContainerText = styled.div`
  width: 300px;
  h2 {
    color: #fff;
    font-size: 20px;
  }
  p {
    color: #fff;
  }
`
