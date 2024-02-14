import styled, { keyframes } from 'styled-components'

import breakpoints from '../../styles/breakpoints'

const floating = keyframes`
 from {
    top: 0px;
 }

to{
    top: 30px;
}

`

export const Section = styled.div`
  padding: 40px 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-bottom: 50px;

  @media ${breakpoints.bg} {
    flex-direction: column-reverse;
    padding: 20px 8%;
    gap: 60px;
    margin-bottom: 0;
  }
`

export const ContainerLeft = styled.div`
  width: 60%;

  h1 {
    color: #fff;
    font-size: 50px;
    line-height: 50px;
  }

  span {
    color: #00ff00;
  }

  p {
    color: #fff;
    margin: 40px 0;
    text-align: justify;
    line-height: 25px;
    font-size: 20px;
  }

  @media ${breakpoints.bg} {
    h1 {
      font-size: 30px;
      line-height: 40px;
      text-align: center;
    }
  }

  @media ${breakpoints.bg} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      line-height: 30px;
    }
  }
`

export const ContainerRigth = styled.div`
  img {
    width: 250px;
    border-radius: 30px;
    position: relative;
    animation: ${floating} 2s ease-in-out infinite alternate;
  }
`
