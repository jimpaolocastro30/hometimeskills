import React, { FC } from 'react'
import styled from 'styled-components'

import { FieldProps } from '.'

const Field: FC <FieldProps> = (props) => {

  return (
    <Container>
      <Control
        { ...props }
      />
    </Container>
  )
}

const Container = styled.div `
  display: block;
`

const Control = styled.input `
  width: 100%;
  padding: .7rem 1rem;
  font-family: inherit;
`

export default Field
