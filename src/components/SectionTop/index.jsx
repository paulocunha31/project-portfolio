import ImageIdeas from '../../assets/image-ideas.png'
import Button from '../Button'
import { ContainerLeft, ContainerRigth, Section } from './styles'

function SectionTop() {
  return (
    <Section>
      <ContainerLeft>
        <h1>
          Transformando Ideais em <span>realidade digital.</span>
        </h1>
        <p>
          A transformação digital não se trata apenas de adotar novas
          tecnologias, mas de alinhar estratégias de negócios com soluções
          digitais que impulsionem a eficiência e a produtividade. É a sinergia
          perfeita entre conceitos inovadores e implementação prática que
          impulsiona o crescimento e o sucesso duradouro.
        </p>
        <a href="#fale-comigo">
          <Button>Entre em contato</Button>
        </a>
      </ContainerLeft>
      <ContainerRigth>
        <img src={ImageIdeas} alt="foto-familia" />
      </ContainerRigth>
    </Section>
  )
}
export default SectionTop
