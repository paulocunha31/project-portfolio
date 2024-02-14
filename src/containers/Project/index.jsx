import { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

import { Container, Button, ContainerItens, ContainerText } from './styles'

function Project() {
  const location = useLocation()
  const [section, setSection] = useState(false)

  function invertVariable() {
    setSection(!section)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { name, description, src } = location.state

  return (
    <>
      <Container>
        <Button
          to={{
            pathname: '/',
            search: `?section=${!section ? 'true' : 'false'} `
          }}
          onClick={invertVariable}
        >
          <BsFillArrowLeftCircleFill />
        </Button>
        <ContainerItens>
          <ContainerText>
            <h2>{name}</h2>
            <p>Descrição: {description}</p>
          </ContainerText>

          <img src={src} alt="image-do-projeto" />
        </ContainerItens>
      </Container>
    </>
  )
}

export default Project
