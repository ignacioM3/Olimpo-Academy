import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPublic from './layout/LayoutPublic'


import './App.css'
import Home from './pages/Home'
import List from './pages/List'
import { CursosProvider } from './context/ProyectosProvider'


function App() {


  return (
    <div className='bg'>
      <BrowserRouter>
        <CursosProvider>
          <Routes>
            <Route path='/' element={<LayoutPublic />}>
              <Route index element={<Home />} />
              <Route path='cursos' element={<List />} />
            </Route>
          </Routes>
        </CursosProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
