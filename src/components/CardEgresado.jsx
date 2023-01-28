import styled from "styled-components"


const CardEgresado = () => {
  return (
    <Container>
        <Name>Hernesto Sosa</Name>
        <CursoName>Peluqueria</CursoName>
        <Fecha>20/08/2023</Fecha>
        <Matricula>129312312</Matricula>
    </Container>
  )
}

const Container = styled.div`
`

const Name = styled.h1``
const CursoName = styled.p``
const Fecha = styled.p``
const Matricula = styled.p``

export default CardEgresado