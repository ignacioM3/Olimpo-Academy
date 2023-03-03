import { useEffect, useState } from "react"


import styled from "styled-components"
import { Link } from "react-router-dom";


//Icon
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BurgerMenu from "./BurgerMenu";




const NavBar = () => {
  const [navBar, setNavbar] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

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
      <Wrapper >
        <Left>
          <BurgerMenu clicked={clicked} handleClick={handleClick} className="burger"/>
          <ListContainer className={`${clicked ? "active" : ""}`}>
            <Link to="/cursos">
              <Title>Cursos</Title>
            </Link>
            <Link to="/egresados">
              <Title>Egresados</Title>
            </Link>
            <Link to="/nosotros">
              <Title>Nosotros</Title>
            </Link>
          </ListContainer>
        </Left>

        <Center>
          <Link to="/">
            <img src="/images/logo.webp" alt="logo-olimpo" />
          </Link>
        </Center>

        <Right>
          <Link to="/favorite">
            <StarBorderIcon />
          </Link>
        </Right>
      </Wrapper>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>  
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
      
    }

`

const ListContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 30px;
  top: -1000px;
  left: -1000px;
  transition: all .5s ease;
  &.active{
    top: 50px;
    left: 0;
  }
  
  @media only screen and (min-width: 1024px) {
      display: flex;
      position: unset;
      margin-top: 0;
    }

`

const Title = styled.h2`
  padding: 0 10px;
  cursor: pointer;
  margin: 20px 0;
`
const Center = styled.div`

  img{
    width: 45px;
    height: 45px;
    border-radius: 30px;
  }

  @media only screen and (min-width: 1024px) {
      order: 0;
      img{
        margin-left: 20px;
        width: 50px;
        height: 50px;
      }
    }
`



const Right = styled.div`
  display: flex;
  transition: 0.5s ease-in-out all;
  
  :hover{
      color: #fff200;
  }

  svg{
    font-size: 36px;
  }
  
  @media only screen and (min-width: 1024px) {
      order: 2;
      
    }
`

const BgDiv = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #222;
  z-index: -1;
  transition: all .6s ease;
  top: -1000px;
  left: -1000px;
  &.active{
    top: 0;
    left: 0;
    border-radius: 0 0 70% 0;
  }
`

export default NavBar