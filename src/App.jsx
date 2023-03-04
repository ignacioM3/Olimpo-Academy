import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPublic from './layout/LayoutPublic'


import './App.css'
import Home from './pages/Home'
import List from './pages/List'
import { CursosProvider } from './context/ProyectosProvider'
import ListEgresado from './pages/ListEgresado'
import Favorite from './pages/Favorite'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'


function App() {


  return (
    <div className='bg'>
      <BrowserRouter>
        <ScrollToTop />
        <CursosProvider>
          <Routes>
            <Route path='/' element={<LayoutPublic />}>
              <Route index element={<Home />} />
              <Route path='cursos' element={<List />} />
              <Route path='egresados' element={<ListEgresado />} />
              <Route path='nosotros' element={<About />}/>
              <Route path='favorite' element={<Favorite />}/>
            </Route>
          </Routes>
        </CursosProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
