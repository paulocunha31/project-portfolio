import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Card from '../Card'
import { H2 } from '../Title/styles'
import { Container } from './styles'
function SectionPortfolio() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const section = searchParams.get('section')

  useEffect(() => {
    if (section) {
      const section = document.getElementById('projeto')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [section])
  return (
    <>
      <Container id="projeto">
        <H2>
          MEU <span>PORTFÓLIO.</span>
        </H2>
        <Card />
      </Container>
    </>
  )
}
export default SectionPortfolio
