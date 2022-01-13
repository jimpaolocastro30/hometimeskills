import { FC, Fragment } from 'react'
import styled from 'styled-components'

import { TVShowsResultsProps } from '..'
import { TVMazeTVShowsResponseProps } from '../../../api'
import { SkeletonCard } from '../../components'
import TVShowsCard from './card'

const TVShowsResult: FC <TVShowsResultsProps> = (props) => {
  return (
    <Container>
      <CardContainer>
        { !props.searchValue && !props.items.length ? <NoContent>Nothing here. Try searching for a TV show above!</NoContent> : null }
        { props.searchValue && props.busy ?
          <Fragment>
            {
              Array.from ({ length: 2 }).map (
                (_: unknown, i: number) =>
                  <SkeletonCard key = { i } />
              )
            }
          </Fragment> : null
        }
        { props.searchValue.length > 1 && !props.items.length && !props.busy ? <NoContent>No results for { props.searchValue }</NoContent> : null }
        { props.items.map (
            (item: TVMazeTVShowsResponseProps, i: number) =>
              <TVShowsCard { ...item } key = { i } />
          )
        }
      </CardContainer>
    </Container>
  )
}

const Container = styled.div `
  padding: 2rem 0;
`

const CardContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NoContent = styled.p `
  text-align: center;
  padding: 0 1rem;
  color: #888;
`

export default TVShowsResult
