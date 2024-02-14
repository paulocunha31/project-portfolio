import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ContainerBsList,
  List,
  ContainerItens,
  ContainerFiX,
  Fix,
  Menu,
  Li,
  ContainerOverlay
} from './styles'

function MenuMobile() {
  const [menu, setMenu] = useState(false)

  function MenuHeader() {
    setMenu(!menu)
  }

  return (
    <>
      <ContainerBsList>
        <List onClick={MenuHeader} />
      </ContainerBsList>

      <ContainerItens $menu={menu} onClick={MenuHeader}>
        <ContainerFiX>
          <Fix></Fix>
        </ContainerFiX>

        <Menu>
          <Li>
            <Link to="/" onClick={MenuHeader}>
              Home
            </Link>
          </Li>

          <Li>
            <a href="#sobre" onClick={MenuHeader}>
              Sobre
            </a>
          </Li>

          <Li>
            <Link to="/curriculo" onClick={MenuHeader}>
              Currículo
            </Link>
          </Li>

          <Li>
            <a href="#projeto" onClick={MenuHeader}>
              Projetos
            </a>
          </Li>

          <Li>
            <a href="#fale-comigo" onClick={MenuHeader}>
              Fale comigo
            </a>
          </Li>
        </Menu>
      </ContainerItens>

      <ContainerOverlay $menu={menu} onClick={MenuHeader}></ContainerOverlay>
    </>
  )
}
export default MenuMobile
