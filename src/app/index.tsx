import React, { FC, useMemo } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { TopNavigation, TopNavigationMenuListItemProps } from './components'
import { CoordinatesPage, StopwatchPage, TVShowPage } from './pages'

type ReactAppProps = {}

const App: FC <ReactAppProps> = (props) => {

  const topNavigationItems = useMemo <Array <TopNavigationMenuListItemProps>> (() => [
    { text: 'Coordinates', to: 'coordinates' },
    { text: 'TV Shows', to: 'tv-shows' },
    { text: 'Stopwatch', to: 'stopwatch' }
  ], [])

  return (
    <Container>
      <Wrapper>
        <TopNavigation
          items = { topNavigationItems }
        />

        <Outlet />
        <Routes>
          <Route path = 'coordinates'   element = { <CoordinatesPage /> } />
          <Route path = 'tv-shows'      element = { <TVShowPage /> } />
          <Route path = 'stopwatch'     element = { <StopwatchPage /> } />
          <Route path = '*'             element = { <Navigate to = 'coordinates' /> } />
        </Routes>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div `
  min-height: 100vh;
  background: #edf2f7;
  padding: 1rem;
`

const Wrapper = styled.div `
  background: #fff;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(1rem, 2vw, 2rem);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  min-height: 70vh;
`

export default App
