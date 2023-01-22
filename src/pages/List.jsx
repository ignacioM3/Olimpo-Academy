import Search from '@mui/icons-material/Search'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const List = () => {
  return (
    <Container>
      <SearchContainer>
        <ButtonSubmit type="submit">
          <Search />
        </ButtonSubmit>
        <input type="text" placeholder='Encuentra tu curso'/>
      </SearchContainer>
      <Title>Todos los cursos</Title>
      <CardContainer >
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>

      </CardContainer>
    </Container>
  )
}


const Container = styled.div`
  background-color: #1f2023;
  padding-bottom: 10px;
`

const SearchContainer = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100vw;
  margin: 0 auto 25px;
  
  input{
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    font-size: 19px;
  }
`

const ButtonSubmit = styled.div`
  cursor: pointer;
  margin-right: 12px;

  svg{
    font-size: 25px;
    color: #6d6868;
  }
`
const Title = styled.h2`
  text-align: center;
  color: white;
  @media only screen and (min-width: 1024px) {
     margin: 40px 0 25px;
     font-size: 28px;
    }
`

const CardContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    color: white;

    @media only screen and (min-width: 1024px) {
      max-width: 1200px;
    }

    @media only screen and (min-width: 1200px) {
      max-width: 1100px;
    }
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export default List