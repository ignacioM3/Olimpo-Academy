import { useEffect, useState } from "react"


import styled from "styled-components"


//Icon
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";




const NavBar = () => {
  const [navBar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)


  return (
    <Container className={navBar ? 'header-opacity' : ''}>
      <Wrapper>
        <Left>
          <MenuIcon />

          <ListContainer>
            <Link to="/cursos">
              <Title>Cursos</Title>
            </Link>
            <Link to="/egresado">
              <Title>Egresados</Title>
            </Link>
            <Link to="/nosotros">
              <Title>Nosotros</Title>
            </Link>
            <Link to="/preguntas">
              <Title>Preguntas Frecuentes</Title>
            </Link>

          </ListContainer>
        </Left>

        <Center>
          <Link to="/">
            <p>Olimpo</p>
          </Link>
        </Center>

        <Right>
          <FavoriteBorderIcon />
        </Right>
      </Wrapper>
      <Option>

      </Option>
    </Container>
  )
}


const Container = styled.header`
    background-color: #161719;
  color: white;

  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  border-bottom: 1px solid #58555558;


  svg{
      font-size: 30px;
      cursor: pointer;
    }
`

const Left = styled.div`

  @media only screen and (min-width: 1024px) {
      order: 1;
      svg{
        display: none;
        
      }
    }

`

const ListContainer = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
      display: flex;
    }

`

const Title = styled.h2`
  padding: 0 10px;
  cursor: pointer;
`
const Center = styled.div`

  img{
    width: 40px;
    height: 40px;
    border-radius: 30px;
  }

  @media only screen and (min-width: 1024px) {
      order: 0;
      
    }
`



const Right = styled.div`
  display: flex;
  transition: 0.5s ease-in-out all;
  :hover{
     color: red;
  }
  
  @media only screen and (min-width: 1024px) {
      order: 2;
      
    }
`

const Option = styled.div``

export default NavBar