import { FC, MutableRefObject, useRef } from 'react'
import styled from 'styled-components'
import useMouse, { MousePosition } from '@react-hook/mouse-position'

import {  CoordinatesBoxRefProps, CoordinatesPageProps } from '..'
import CoordinatesBox from './box'

const CoordinatesPage: FC <CoordinatesPageProps> = (props) => {

  const ref: MutableRefObject <CoordinatesBoxRefProps> = useRef <CoordinatesBoxRefProps> (null)
  const mouse: MousePosition = useMouse (ref, { enterDelay: 50, leaveDelay: 50, fps: 120 })

  return (
    <Container>
      <CoordinatesBox
        posRef = { ref }
        mouse = { mouse }
      />
    </Container>
  )
}

const Container = styled.div ``

export default CoordinatesPage
