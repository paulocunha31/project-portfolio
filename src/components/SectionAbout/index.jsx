import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Foto from '../../assets/foto.png'
import { H2 } from '../Title/styles'
import {
  Container,
  ContainerImage,
  ContainerText,
  SocialNetWork
} from './styles'

function SectionAbout() {
  return (
    <Container id="sobre">
      <ContainerImage>
        <img src={Foto} alt="image-de-portfólio" />
      </ContainerImage>

      <ContainerText>
        <H2>
          MUITO PRAZER, ME CHAMO <span>PAULO ROBERTO.</span>
        </H2>
        <p>
          Sou desenvolvedor Font-end, tenho trabalhado em projetos pessoais,
          usando tecnologias como JavaScript, React, CSS, HTML, e atualmente
          estou trabalhando minhas abilidades em Back-end.
        </p>
        <p>
          Meu objetivo profissional é o constante aprimoramento das minhas
          habilidades em Front-end e Back-end, e estou entusiasmado com a
          perspectiva de enfrentar desafios estimulantes que me permitam crescer
          e contribuir para projetos inovadores.
        </p>

        <SocialNetWork>
          <Link to="https://www.linkedin.com/in/paulo-roberto-bc/">
            <button>
              <FaLinkedin />
            </button>
          </Link>

          <Link to="https://github.com/paulocunha31">
            <button>
              <FaGithub />
            </button>
          </Link>
        </SocialNetWork>
      </ContainerText>
    </Container>
  )
}

export default SectionAbout
