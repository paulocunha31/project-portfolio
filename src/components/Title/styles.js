import styled from 'styled-components'

import breakpoints from '../../styles/breakpoints'

export const H2 = styled.h2`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
  span {
    color: #00ff00;
  }

  @media ${breakpoints.bg} {
    text-align: center;
  }
`
