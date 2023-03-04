import styled from "styled-components"



const About = () => {
  return (
    <Container>
      <Title>Nosotros</Title>
      <TextContainer>
        <Title2>¿Quiénes Somos?</Title2>
        <Des>
          Somos una institución en crecimiento para la formación y capacitación profesional para la inserción laboral de joven y adultos. Brindando lo mejor en conocimientos en los diferentes cursos.
          Con clases teóricos y prácticos explicadas paso a paso, certificando cada uno de los cursos con validez nacional y reconocimiento internacional por una asociación civil con personeria jurídica plena.
        </Des>
      </TextContainer>
      <TextContainer>
        <Title2>¿Dondé se dictan los Cursos?</Title2>
        <Des>
          Los cursos se dictan en diferentes puntos de la provincia de Salta.
          Con sede central en la ciudad de Metan, con filiales en Las Lajitas, El Quebrachal entre otras ciudades.
        </Des>
      </TextContainer>

    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
`

const Title = styled.h1`
  text-align: center;
  color: white;
  margin: 20px 0;
`

const TextContainer = styled.div`
  text-align: center;
  color: #cdc6c6;
`

const Title2 = styled.h2`
  color: white;
`

const Des = styled.p`
  padding: 20px;
`


export default About
