import {  } from 'react'
//FALTA O OUTLET - NAO SEI OQ É ISSO
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Routes>
      <Route path='Nav' element={<Nav />} />
      <Route path='Footer' element={<Footer />} />
      
      </Routes>
    </div>
  )
}

export default App
