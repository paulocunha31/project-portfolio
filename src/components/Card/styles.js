import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 300px);

  justify-content: space-between;

  .show-hover {
    background-color: #000;
  }

  @media ${breakpoints.bg} {
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
    gap: 20px;
  }

  @media ${breakpoints.md} {
    grid-template-columns: repeat(1, 80vw);
    justify-content: center;
    gap: 20px;
  }
`
export const ContainerImg = styled.div`
  background-image: url(${(props) => props.$img});
  height: 500px;
  width: 280px;
  background-size: cover;

  background-position: 100% 0%;
  transition: 1s;
  cursor: pointer;
  border-radius: 40px;
  position: relative;
  border: 30px;

  &:hover {
    background-position: 100% 100%;
  }

  @media ${breakpoints.md} {
    width: 80vw;
    transition: 8s;
    background-position: ${(props) => props.$visibleOverlay && '100% 100%'};
  }
`
export const ContainerOverlay = styled.div`
  height: 500px;
  width: 280px;
  cursor: pointer;
  border-radius: 40px;
  position: relative;
  border: 30px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b8;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  opacity: 0;
  transition: 1s;

  &:hover {
    opacity: 1;
  }

  @media ${breakpoints.md} {
    width: 80vw;

    transition: 2s;
    opacity: ${(props) => (props.$visibleOverlay ? '1 ' : '0')};
  }
`
