import React from 'react'
import styled from "styled-components"


const Main = () => {
    return (
        <Container>

            <InfoContainer>
                <Title>Potencia tus conocimientos!</Title>
                <Description>
                    En Olimpo Academy encontra los mejores cursos desde peluqueria, estética, auxiliar de enfermeria
                    agente sanitario, mécanica de motos, etc...

                    <Des>Cada <span>Logro</span> Comienza con la desición de <span>Intentarlo</span></Des>
                </Description>

            </InfoContainer>
        </Container>
    )
}


const Container = styled.div`
    background-color: #274998;
    min-height: 200vh;
    padding-top: 15px;
`

const InfoContainer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    background-color: #6a86c790;
    margin: 0 10px;
`  

const Title = styled.h3`
    text-align: center;
    padding-top: 20px;
`

const Description = styled.p`
    padding: 20px;
`

const Des = styled.p`
    margin-top: 15px;
    text-align: center;
    span{
        color: #69c561;
        font-weight: 600;
    }
`
export default Main