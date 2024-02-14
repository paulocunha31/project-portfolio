import { Routes, Route } from 'react-router-dom'

import Curriculum from '../containers/Curriculum'
import Home from '../containers/Home'
import Project from '../containers/Project'
import ScreenThankyou from '../containers/ScreenThankyou'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projeto/:id" element={<Project />} />
      <Route path="/curriculo" element={<Curriculum />} />
      <Route path="/obrigado" element={<ScreenThankyou />} />
    </Routes>
  )
}

export default Router
