import { MdEmail } from 'react-icons/md'

import styled from 'styled-components'
export const ContainerFooter = styled.div`
  padding: 40px 4%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 40px 10px #ffffff1d;
  gap: 20px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 40px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerLogo = styled.div`
  img {
    width: 75px;
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
`

export const IconEmail = styled(MdEmail)`
  color: #00ff00;
  width: 40px;
  height: 40px;
`
export const ContainerIcon = styled.div`
  div {
    width: 275px;
    a {
      color: #7b7b7b;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        color: #fff;
        transform: scale(1.01);
        transition: 0.2s;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`
