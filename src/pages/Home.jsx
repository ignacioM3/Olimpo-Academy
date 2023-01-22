import { Link } from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"

const Home = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Potencia Tus Conocimientos En Olimpo Academy</Title>
        <Description>
          En Olimpo Academy encontra los mejores cursos desde peluqueria, estética, auxiliar de enfermeria
          agente sanitario, mécanica de motos, etc...
        </Description>

      </InfoContainer>
      <ButtonContainer>
        <Link to="/cursos">
          <Button>Todos los Cursos</Button>
        </Link>

      </ButtonContainer>

      <Line></Line>

      <Cursos>
        <Title2>CURSOS EN OFERTA</Title2>
        <CardContainer>
          <Row>
            <Card />
            <Card />
            <Card />
          </Row>
        </CardContainer>

      </Cursos>
    </Container>
  )
}

const Container = styled.div`
    background-color: #1f2023;
    color: white;
    padding-bottom: 10px;
`

const InfoContainer = styled.div`
  padding: 20px 30px;
  
  @media only screen and (min-width: 768px) {
    padding: 30px 80px 20px;
    text-align: center;
  }
  
  @media only screen and (min-width: 1024px){
    padding: 30px 200px 20px;
  }
`

const Title = styled.h1`
  font-size: 40px;

  @media only screen and (min-width: 1024px){
    font-size: 50px;
    margin: 30px 0;
  }

`
const Description = styled.p`
padding-top: 25px;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  } 


  @media only screen and (min-width: 1024px){
    font-size: 25px;
    margin: 20px 0;
  }
`


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 40px;
`
const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  background-color: #19a05f;
  color: #373737;

  transition: 0.3s all ease-in;
  &:hover{
    background-color:#2be68c70;
    color: black;
  }

  @media only screen and (min-width: 1024px){
    padding: 15px;
    font-size: 18px;
    border-radius: 8px;
  }
`

const Cursos = styled.div`

`

const Title2 = styled.h3`
  text-align: center;
  margin: 30px 0 40px;
`

const CardContainer = styled.div`
   width: 100%;
    margin: 0 auto;
    max-width: 800px;

    @media only screen and (min-width: 1024px) {
      max-width: 1200px;
    }
`
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`


const Line = styled.div`
  width: 200px;
  margin: 20px auto;
  border: 2px solid gray;
`

export default Home