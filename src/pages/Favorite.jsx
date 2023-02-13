import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import useCursos from '../hooks/useCursos'

const Favorite = () => {

  const {cursos, favorites} = useCursos();

  return (
    <Container>
      <Title>Favoritos</Title>

      <CardContainer >
        <Row>
          {
           favorites.length ? (
            favorites.map((cur) =>{
              for(let i = 0; i < favorites.length; i++){
                if(favorites[i].name === cur.name){
                  cur.favorite = true
                }
              }
              return <Card key={cur.id}{...cur}/>
            })
           ) : <Error>No hay cursos agregados a favoritos</Error>
          }
        </Row>

      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #1f2023;
  color: white;
`

const Title = styled.h2`
  text-align: center;
  margin: 25px 0;
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

const Error = styled.h2`
  color: #4ce351;
  text-align: center;
`

export default Favorite