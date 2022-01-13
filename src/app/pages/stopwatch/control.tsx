import React, { FC } from 'react'
import styled from 'styled-components'

import { StopwatchControlProps } from '..'

const StopwatchControl: FC <StopwatchControlProps> = (props) => {
  return (
    <Container>
      { !props.started ? 
        <Start type = 'button' onClick = { props.handleOnStart }>{ props.paused && props.duration > props.initial ? 'Resume' : 'Start' }</Start>
        : <Pause type = 'button' onClick = { props.handleOnPause }>Pause</Pause>
      }
      {
        props.duration > (props.initial || 0) ?
          <Reset type = 'button' onClick = { props.handleOnReset }>Reset</Reset> : null
      }
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  justify-content: center;
  gap: 1ch;
`

const Button = styled.button `
  padding: clamp(.7rem, 4vw, 1rem) clamp(1rem, 4vw, 4rem);
  background: #888;
  border: none;
  font-size: clamp(.8rem, 4vw, 1.3rem);
  border-radius: 5px;
  font-weight: 600;
`

const Start = styled (Button) `
  background: #38a169;
  color: #fff;
`

const Pause = styled (Button) `
  background: #e53e3e;
  color: #fff;
`

const Reset = styled (Button) `
  background: #ddd;
`

export default StopwatchControl
