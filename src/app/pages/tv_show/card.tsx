import React, { FC } from 'react'
import styled from 'styled-components'
import HTMLTagParser from 'html-react-parser'

import { TVMazeTVShowsResponseProps } from '../../../api'

const TVShowsCard: FC <TVMazeTVShowsResponseProps> = (props) => {

  return (
    <Container>
      <Image
        src = { props.show.image ? props.show.image.medium : 'https://via.placeholder.com/112x157.png?text=No+image' }
        alt = { props.show.name }
      />
      <Content>
        <Wrapper>
          {
            props.show.genres.map (
              (genre: string, i: number) =>
                <Genre key = { i }>{ genre }</Genre>
            )
          }
        </Wrapper>
        <Title>{ props.show.name }</Title>
        <Summary>
          {
            props.show.summary ?
              HTMLTagParser (props.show.summary)
            : null
          }
        </Summary>
      </Content>
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #eee;

  @media (min-width: 450px) {
    flex-direction: row; 
  }
`

const Image = styled.img `
  display: block;
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
  font-family: inherit;
  font-size: .8rem;
  max-height: 128px;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;

  @media (min-width: 450px) {
    border-radius: 0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    max-width: 128px;
    max-height: 172px;
  }
  
`

const Content = styled.div `
  padding: 1rem;
  cursor: default;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Wrapper = styled.div `
  display: flex;
  gap: .5rem;
`

const Genre = styled.div `
  background: #eee;
  font-size: .7rem;
  padding: .5rem .7rem;
  border-radius: 20px;
  font-weight: 600;
  color: #777;
`

const Title = styled.h4 `
  margin: .7rem 0 .3rem 0;
  padding: 0 .5rem;
  color: #333;
`

const Summary = styled.div `
  padding: 0 .5rem;
  font-size: .8rem;
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default TVShowsCard
