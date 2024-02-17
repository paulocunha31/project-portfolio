import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  padding: 80px 4%;
  display: flex;
  gap: 40px;

  @media ${breakpoints.bg} {
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }
`

export const ContainerImage = styled.div`
  width: 50%;
  padding: 40px 4%;

  img {
    height: 482px;
    width: 294px;
    border-radius: 30px;
  }

  @media ${breakpoints.bg} {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0;
  }
`

export const ContainerText = styled.div`
  padding: 40px 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: #fff;
    margin: 10px 0;
    line-height: 25px;
    font-size: 20px;
  }

  @media ${breakpoints.bg} {
    padding: 10px 0;

    p {
      line-height: 30px;
    }
  }
`
export const SocialNetWork = styled.div`
  display: flex;
  gap: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #00ff00;
    font-size: 20px;
    margin-top: 20px;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
      box-shadow: 0px 0px 8px #00ff08;
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media ${breakpoints.bg} {
    justify-content: center;
  }
`
