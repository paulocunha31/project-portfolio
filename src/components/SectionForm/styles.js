import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  input {
    border-radius: 5px;
    border: 1px solid gray;
    padding: 10px 15px;
    width: 300px;
    margin-top: 5px;
    font-size: 18px;
    background-color: #24242432;
    color: #fff;
    border: none;
    outline: none;
  }

  textarea {
    width: 300px;
    resize: none;
    border-radius: 5px;
    margin-top: 2px;
    height: 80px;
    font-size: 18px;
    padding: 5px;
    background-color: #24242432;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 15px;
  }

  button {
    width: 300px;
    height: 40px;
    background-color: #00ff00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 18px;

    &:hover {
      transform: scale(1);
      transition: 0.2s;
      box-shadow: 0px 0px 8px #00ff08;
    }

    &:active {
      opacity: 0.8;
    }
  }

  span {
    color: red;
    position: absolute;
    margin-top: -15px;
  }
`
export const ContainerTitle = styled.div`
  margin-bottom: 50px;
  span {
    color: #00ff00;
    position: relative;
  }
`
