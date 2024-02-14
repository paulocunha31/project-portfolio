import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }

`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
    border: 1px solid #00ff00;
    border-radius: 10px;
    padding: 30px 20px;
    animation: ${scale} 0.5s linear;

    span {
      color: #00ff00;
    }
  }
`
