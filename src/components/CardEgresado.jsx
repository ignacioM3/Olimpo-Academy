import styled from "styled-components"


const CardEgresado = (props) => {

  const {name, fecha, matricula, cursoName} = props;
  return (
    <Container>
        <Name>{name}</Name>
        <Item>
            <Text>{cursoName}</Text>
        </Item>
        <Item>
            <span>Fecha: </span>
            <Text>{fecha}</Text>
        </Item>
        <Item>
            <span>Matricula: </span>
            <Text>{matricula}</Text>
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

const Name = styled.h2`
  text-align: center;
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