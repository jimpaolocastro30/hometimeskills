import React, { FC, MutableRefObject, useRef } from 'react'
import styled from 'styled-components'

import { CoordinatesBoxProps, CoordinatesBoxRefProps, MouseCursorValueProps } from '..'

const CoordinatesBox: FC <CoordinatesBoxProps> = (props) => {

  const grayPos: MutableRefObject <CoordinatesBoxRefProps> = useRef <CoordinatesBoxRefProps> (null)

  return (
    <Container ref = { props.posRef }>
      {
        props.posRef.current ?
          <CursorPosition
            position = {{
              x: (
                (props.mouse.x || 0) > (props.posRef.current.clientWidth - (grayPos.current?.clientWidth || 0)) - 10 ?
                  props.posRef.current.clientWidth - (grayPos.current?.clientWidth || 0) : (props.mouse.x || 0)
              ),
              y: (
                (props.mouse.y || 0) > (props.posRef.current.clientHeight - (grayPos.current?.clientHeight || 0)) - 10 ?
                  props.posRef.current.clientHeight - (grayPos.current?.clientHeight || 0) : (props.mouse.y || 0)
              )
            }}
            ref = { grayPos }
          >
            <Text>x: { props.mouse.x || 0 }, y: { props.mouse.y || 0 }</Text>
          </CursorPosition>
        : null
      }
    </Container>
  )
}

const Container = styled.div `
  background: pink;
  border-radius: 10px;
  width: 100%;
  min-height: 400px;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    border-radius: inherit;
  }

  &:hover {
    &::before {
      content: '';
    }
  }
`

const CursorPosition = styled.div <{ position: MouseCursorValueProps }> `
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  background: grey;
  color: #fff;
  border-radius: 10px;
  pointer-events: none;
  transform: translate(${ props => props.position.x }px, ${ props => props.position.y }px);
`

const Text = styled.p `
  font-size: .9rem;
  font-weight: 600;
`

export default CoordinatesBox
