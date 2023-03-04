import styled from "styled-components"
import useCursos from "../hooks/useCursos";

//icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const About = () => {
  const {message} = useCursos();
  
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
      <TextContainer>
        <Title2>Contacto</Title2>
        <Des>Actualmente nos encontramos asesorando todo por: </Des>
        <WhatsappContainer href={`https://${message}/send/?phone=+5493876520393`} target="_blank">
          <WhatsAppIcon /> +549 3876 52-0393
        </WhatsappContainer>
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

  @media only screen and (min-width: 768px) {
    padding: 0 140px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 220px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 0 320px;
  }

  @media only screen and (min-width: 1400px) {
    padding: 0 420px;
  }
`

const Title2 = styled.h2`
  color: white;
  @media only screen and (min-width: 1024px) {
    margin: 30px 0 0;
  }

  @media only screen and (min-width: 1400px) {
    margin: 60px 0 0;
  }
`

const Des = styled.p`
  padding: 20px;
  
`

const WhatsappContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
svg{
    color: #00bb2d;
  }
`


export default About
