import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import PdfViewer from '../../components/PdfViewer'
import { Container, Button } from './styles'

function Curriculum() {
  return (
    <>
      <Container>
        <Button to={'/'}>
          <BsFillArrowLeftCircleFill />
        </Button>
      </Container>

      <PdfViewer />
    </>
  )
}

export default Curriculum
