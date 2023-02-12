import React from 'react'
import styled from 'styled-components'

//icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const VerMas = () => {
  return (
    <Container>
      <Title>Todos</Title>
      <ChevronRightIcon />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8d2d229;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  margin: 0 20px;
  transition: 1s all ease;
  :hover{
    transform: translateY(-15px)
  }
  @media only screen and (min-width: 720px){
    margin: 0 10px;
  }
`

const Title = styled.h2`
  
`

export default VerMas
