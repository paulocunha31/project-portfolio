import { Link } from 'react-router-dom'

import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  padding: 20px 4%;
  display: flex;
  justify-content: space-between;
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
