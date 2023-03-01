import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import useCursos from '../hooks/useCursos'

const List = () => {
  const { cursos, favorites } = useCursos()
  const [filter, setFilter] = useState('salud')
  const category = ['belleza', 'salud', 'educación', "administrativa", "varios"]

  
  return (
    <Container>
      <Title>Todos los cursos</Title>
      <ContainerCheckbox>
        <Ul>
          {category.map((cat, index) => (
            <Lista key={index}>
              <Input type="checkbox" id={`check-${index}`} value={cat} onInputCapture={e=> setFilter(e.target.value)} />
              <Label htmlFor={`check-${index}`}>{cat}</Label>
            </Lista>
          ))}
        </Ul>
      </ContainerCheckbox>
      <CardContainer >
        <Row>
          {
            cursos.map((cur) => {
              for (let i = 0; i < favorites.length; i++) {
                if (favorites[i].name === cur.name) {
                  cur.favorite = true
                }
              }

              return <Card key={cur.id}{...cur} />
            })
          }
        </Row>

      </CardContainer>
    </Container>
  )
}


const Container = styled.div`
  background-color: #1f2023;
  padding-bottom: 10px;
`

const Title = styled.h2`
  text-align: center;
  color: white;
  @media only screen and (min-width: 1024px) {
     margin: 40px 0 25px;
     font-size: 28px;
    }
`

const ContainerCheckbox = styled.div`
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;    
`

const Ul = styled.ul`
    list-style: none;
    padding: 20px;
`
const Lista = styled.li`
    display: inline;
    margin: 0 10px;
    input[type="checkbox"]:checked+label{
        border: 1px solid #505172;
        background-color: #505272;
        color: white;
        transition: all .2s;
    }
`
const Label = styled.label`
    display: inline-block;
    background-color: #2B3241;
    border: 1px solid #B1B2CF;
    color: #c2c3e7;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
    padding: 8px 12px;
    cursor: pointer;

    &:hover{
        border: 1px solid #c0c2eb;
    }
`
const Input = styled.input`
    display: none;
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