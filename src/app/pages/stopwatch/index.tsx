import React, { FC } from 'react'
import styled from 'styled-components'

import { StopwatchPageProps, WatchHookProps } from '..'
import StopwatchControl from './control'
import StopwatchTimer from './timer'
import { useWatch } from './watch'

const initial: number = 0

const StopwatchPage: FC <StopwatchPageProps> = (props) => {

  const watch: WatchHookProps = useWatch (initial)

  return (
    <Container>
      <StopwatchTimer
        duration = { watch.duration }
      />
      <StopwatchControl
        { ...watch }
        initial = { initial }
      />
    </Container>
  )
}

const Container = styled.div ``

export default StopwatchPage
