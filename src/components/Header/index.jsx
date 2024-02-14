import { Link } from 'react-router-dom'

import MenuMobile from '../MenuMobile'
import { ContainerText, Menu, Li } from './styles'

function Header() {
  return (
    <>
      <ContainerText>
        <h2>
          Paulo <span>Roberto</span>
        </h2>
        <p>Programador Front-End</p>
      </ContainerText>
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>

        <Li>
          <a href="#sobre">Sobre</a>
        </Li>

        <Li>
          <Link to="/curriculo">Currículo</Link>
        </Li>

        <Li>
          <a href="#projeto">Projetos</a>
        </Li>

        <Li>
          <a href="#fale-comigo">Fale comigo</a>
        </Li>
      </Menu>

      <MenuMobile />
    </>
  )
}
export default Header
