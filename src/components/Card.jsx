import { useState } from 'react';
import styled from 'styled-components'



//icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const Card = () => {

  const [fav, setFav] = useState();

  const handleFavorite = () =>{
    setFav(!fav)
  }
  return (
    <Container>
      <ImgContainer>
        <Img src="/images/barberia.jpg" />
        <FavoriteContainer onClick={handleFavorite}>
          {
            fav ? 
            <StarIcon className='red'/> :
            <StarBorderIcon className='rd'/> 
          }
        </FavoriteContainer>
      </ImgContainer>

      <Wrapper>
        <InfoContainer>
          <Title>Curso de Peluqueria</Title>
          <DetailContainer>
            <TimeContainer>
              <AccessTimeIcon />
              <Time>5 meses</Time>
            </TimeContainer>


            <PriceContainer>
              <AttachMoneyIcon />
              <Time>50000</Time>
            </PriceContainer>
          </DetailContainer>

          <Description>
            Curso de peluqueria aplicando distinto tipo de cortes y tipo de maquinas con varios tipo de
            pelos con los mejores profesores de San José de Metan.
            Curso de peluqueria aplicando distinto tipo de cortes y tipo de maquinas con varios tipo
          </Description>
        </InfoContainer>
        <ButtonContainer>
          <Button>
            Quiero este curso
          </Button>
        </ButtonContainer>

      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 280px;
  margin: 25px auto 30px;
  border-radius: 10px;
  background-color: #e8d2d229;
  transition: 1s all ease;
  :hover{
    transform: translateY(-15px)
  }

`
const Wrapper = styled.div`
 
`
const ImgContainer = styled.div`
  position: relative;

`
const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`
const FavoriteContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  svg{
    font-size: 40px;
  }

`

const InfoContainer = styled.div`
  padding: 10px 12px;

`
const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  svg{
    font-size: 22px;
    margin-right: 5px;
  }
`
const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ff9100;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
 
  color: #12cf12;
`
const Title = styled.h3`
  text-align: center;
`
const Time = styled.p``
const Description = styled.p`
  padding: 10px 12px;
  text-align: center;
  font-size: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  border: none;
  padding: 12px 10px;
  border-radius: 0 0 10px 10px;
  width: 100%;
  cursor: pointer;
  background-color: #e8d2d229;
  color: white;
  transition: 1s all ease;
  :hover{
    background-color: #443f3d;
    color: #a4c1a4;
  }
`
export default Card