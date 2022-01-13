import React, { FC } from 'react'
import styled from 'styled-components'

import { TopNavigationProps } from '..'
import TopNavigationMenuList from './list'

const TopNavigation: FC <TopNavigationProps> = (props) => {
  return (
    <Container>
      <TopNavigationMenuList { ...props } />
    </Container>
  )
}

const Container = styled.header `
  margin-bottom: 1.5rem;
`

export default TopNavigation
