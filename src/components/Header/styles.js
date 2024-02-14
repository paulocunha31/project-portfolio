import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'
export const ContainerText = styled.div`
  h2 {
    color: #fff;
    font-size: 40px;

    @media ${breakpoints.bg} {
      font-size: 35px;
    }

    @media ${breakpoints.md} {
      font-size: 30px;
    }

    @media ${breakpoints.sm} {
      font-size: 20px;
    }
  }
  span {
    color: #00ff00;
  }

  p {
    color: #fff;
    font-size: 20px;
    @media ${breakpoints.bg} {
      font-size: 18px;
    }

    @media ${breakpoints.md} {
      font-size: 15px;
    }

    @media ${breakpoints.sm} {
      font-size: 10px;
    }
  }
`

export const Menu = styled.div`
  list-style: none;

  @media ${breakpoints.el} {
    display: none;
  }
`

export const Li = styled.li`
  display: inline-block;
  padding: 0 40px;
  font-size: 20px;
  a {
    color: #7b7b7b;
    text-decoration: none;
    display: inline-block;

    &:hover {
      color: #fff;
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
`
