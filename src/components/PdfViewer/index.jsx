import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import ptPT from '@react-pdf-viewer/locales/lib/pt_PT.json'

import Curriculo from '../../assets/curriculo.pdf'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Container } from './styles'
function PdfViewer() {
  const newPlugin = defaultLayoutPlugin()

  return (
    <Container>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={Curriculo} localization={ptPT} plugins={[newPlugin]} />
      </Worker>
    </Container>
  )
}
export default PdfViewer
