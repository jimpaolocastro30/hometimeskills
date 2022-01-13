import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

import { SkeletonCardProps } from '.'

const SkeletonCard: FC <SkeletonCardProps> = (props) => {
  return (
    <Container>
      <Skeleton height = '100%' />
      <Content>
        <Skeleton height = { 35 } />
        <Skeleton count = { 4 } />
      </Content>
    </Container>
  )
}

const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`

const Content = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default SkeletonCard
