import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import Curriculo from '../../assets/curriculo.pdf'
import { Container, Button } from './styles'

function Curriculum() {
  return (
    <Container>
      <Button to={'/'}>
        <BsFillArrowLeftCircleFill />
      </Button>

      <div>
        <embed src={Curriculo} type="application/pdf" />
      </div>
    </Container>
  )
}

export default Curriculum
