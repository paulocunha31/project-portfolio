import { Link } from 'react-router-dom'

import Project1 from '../../assets/projeto1.png'
import Project2 from '../../assets/projeto2.png'
import Project3 from '../../assets/projeto3.png'
import { Container, ContainerImg } from './styles'

function Card() {
  const images = [
    {
      name: 'Conversor de Moedas',
      src: Project1,
      alt: 'projeto1',
      description: `O aplicativo é um conversor de moedas  que funciona tanto em desktop como nos dispositivos mobile.`
    },
    {
      name: 'Sorteador de Números',
      src: Project2,
      alt: 'projeto2',
      description: `O aplicativo é um sorteador de números ramdômico e também de números que não se repetem,
      funciona em desktop e em dispositivos mobile.`
    },
    {
      name: 'projeto3',
      src: Project3,
      alt: 'projeto3',
      description: 'Descrição do Projeto 3'
    }
  ]

  return (
    <Container $img>
      {images.map((item, index) => (
        <Link key={index} to={`/projeto/${index + 1}`} state={item}>
          <ContainerImg className="teste" $img={item.src}>
            <div className="overlay">{item.name}</div>
          </ContainerImg>
        </Link>
      ))}
    </Container>
  )
}

export default Card
