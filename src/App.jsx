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
import LayoutPrivate from './layout/LayoutPrivate'
import Dashboard from './pages/Dashboard'
import Redirect from './components/Redirect'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthProvider'
import EgresadosAdmin from './components/EgresadosAdmin'
import CursosAdmin from './components/CursosAdmin'
import FavoritosAdmin from './components/FavoritosAdmin'


function App() {


  return (
    <div className='bg'>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <CursosProvider>
            <Routes>
              <Route path='/' element={<LayoutPublic />}>
                <Route index element={<Home />} />
                <Route path='cursos' element={<List />} />
                <Route path='egresados' element={<ListEgresado />} />
                <Route path='nosotros' element={<About />} />
                <Route path='favorite' element={<Favorite />} />
                <Route path="login" element={<Login />} />
                <Route path='*' element={<Redirect />} />
              </Route>
              <Route path='/admin/' element={<LayoutPrivate />} >
                <Route index element={<Dashboard />} />
                <Route path='cursos' element={<CursosAdmin />}/>
                <Route path='egresados' element={<EgresadosAdmin />}/>
                <Route path='favoritos' element={<FavoritosAdmin />}/>
              </Route>
            </Routes>
          </CursosProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
