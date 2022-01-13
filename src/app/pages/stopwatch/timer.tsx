import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { ClockProps, StopwatchTimerProps } from '..'

const StopwatchTimer: FC <StopwatchTimerProps> = (props) => {

  const clock = useMemo <ClockProps> (() => {
    let duration: number = props.duration
    const millis: number = duration % 1000

    duration = (duration - millis) / 1000
    const seconds = duration % 60

    duration = (duration - seconds) / 60
    const minutes = duration % 60

    return {
      millis,
      minutes,
      seconds
    }
  }, [props.duration])

  return (
    <Container>
      <Timer>
        <Minutes>{ String (clock.minutes).padStart (2, '0') }:</Minutes>
        <Seconds>{ String (clock.seconds).padStart (2, '0') }:</Seconds>
        <Millis>{ Math.floor (clock.millis / 100) }</Millis>
      </Timer>
    </Container>
  )
}

const Container = styled.div `
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Timer = styled.div `
  font-variant-numeric: tabular-nums;
`

const Number = styled.p `
  font-size: clamp(2rem, 10vw, 5rem);
  font-weight: 600;
  color: #444;
  display: inline-block;
`

const Minutes = styled (Number) `
`
const Seconds = styled (Number) ``
const Millis = styled (Number) ``

export default StopwatchTimer
