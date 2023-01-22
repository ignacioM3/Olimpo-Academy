import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const LayoutPublic = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default LayoutPublic