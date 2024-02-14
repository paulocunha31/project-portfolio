import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { ContainerHeader } from './styles'

function Home() {
  return (
    <>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <Main />

      <Footer />
    </>
  )
}

export default Home
