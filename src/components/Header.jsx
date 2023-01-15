import { useEffect, useState } from "react"


import styled from "styled-components"


//Icon
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const Header = () => {
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
        </Left>

        <Center>
          <p>Olimpo</p>
        </Center>

        <Right>
          <SearchIcon className="mr-5" />
          <FavoriteBorderIcon />
        </Right>
      </Wrapper>
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
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #58555558;


  svg{
      font-size: 25px;
      cursor: pointer;
    }
`

const Left = styled.div`

`
const Center = styled.div`
  

  img{
    width: 40px;
    height: 40px;
    border-radius: 30px;
  }
`

const Image = styled.img`
`

const Right = styled.div`

`

export default Header