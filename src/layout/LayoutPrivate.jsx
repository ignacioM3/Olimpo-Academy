import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import styled from 'styled-components'


const LayoutPrivate = () => {
  const { auth, cargando } = useAuth()

  return (
    <>
      {!auth._id ?
        (
          <Container>
            <Layout>
              <Title>Dashboard - Admin </Title>
              <Option>
                <OptionOne>
                  <Link to="/admin/cursos">
                    Clientes
                  </Link>
                </OptionOne>
                <OptionOne>
                  <Link to="/admin/egresados">
                    Egresados
                  </Link>
                </OptionOne>
                <OptionOne>
                  <Link to="/admin/favoritos">
                    Favoritos
                  </Link>
                </OptionOne>
              </Option>
              <Logout>
                <h2>Renso</h2>
                <Button>Cerrar Sesion</Button>
              </Logout>
            </Layout>
            <Main>
              <Outlet />
            </Main>
          </Container>
        ) : <Navigate to="/" />
      }
    </>
  )
}


const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #63656c;

  a{
    color: #63656c;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  min-height: 100vh;
  padding: 10px;
  border-right: 2px solid #9ca1a9;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 0px 10px 1px;
`
const Title = styled.h1`
  text-align: center;
`

const Option = styled.div`
  text-align: center;
`
const OptionOne = styled.h2`
  font-size: 25px;
  margin: 15px 0;
  cursor: pointer;
`
const Logout = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`
const Button = styled.button`
  border: none;
  background-color: #f03535;
  color: white;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
`

const Main = styled.div`
  width: 75%;
  min-height: 100vh;
`




export default LayoutPrivate