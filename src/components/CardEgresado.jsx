import styled from "styled-components"


const CardEgresado = () => {
  return (
    <Container>
        <Name>Hernesto Sosa</Name>
        <Item>
            <Text>Peluquería Profesional Integral</Text>
        </Item>
        <Item>
            <span>Fecha: </span>
            <Text>22/10/2023</Text>
        </Item>
        <Item>
            <span>Matricula: </span>
            <Text>124124132</Text>
        </Item>
    </Container>
  )
}

const Container = styled.div`
  background-color: #e8d2d229;
  margin: 25px auto 30px;
  border-radius: 10px;
  padding: 20px;
  transition: 1s all ease;
  cursor: pointer;
  span{
    font-weight: 700;
  }

  :hover{
    transform: translateY(-15px)
  }
`

const Name = styled.h1`
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

const Text = styled.p`
  color: #f8f3f3;
`


export default CardEgresado