import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import {
  ContainerFooter,
  Container,
  ContainerLogo,
  SocialNetWork,
  IconEmail,
  ContainerIcon
} from './styles'
function Footer() {
  return (
    <ContainerFooter>
      <Container>
        <ContainerLogo>
          <img src={Logo} alt="logo-site" />
        </ContainerLogo>

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
      </Container>

      <ContainerIcon>
        <div>
          <Link to="mailto:pauloroberto_odc@hotmail.com">
            <IconEmail />
            pauloroberto_odc@hotmail.com
          </Link>
        </div>
      </ContainerIcon>
    </ContainerFooter>
  )
}

export default Footer
