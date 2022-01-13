import { MousePosition } from '@react-hook/mouse-position'
import { MutableRefObject } from 'react'
import { TVMazeTVShowsResponseProps } from '../../api'

import CoordinatesPage from './coordinates'
import TVShowPage from './tv_show'
import StopwatchPage from './stopwatch'

export {
  CoordinatesPage,
  TVShowPage,
  StopwatchPage
}

export type PublicPageProps = {}

export type CoordinatesPageProps = {} &  PublicPageProps
export type TVShowPageProps = {} &  PublicPageProps
export type StopwatchPageProps = {} &  PublicPageProps

export type MouseCursorValueProps = {
  x: number | null
  y: number | null
}

export type CoordinatesBoxRefProps = {} & HTMLDivElement | null

export type CoordinatesBoxProps = {
  posRef: MutableRefObject <CoordinatesBoxRefProps>
  mouse: MousePosition
}

export type TVShowsResultsProps = {
  items: Array <TVMazeTVShowsResponseProps>
  busy: boolean
  fetched: boolean
  searchValue: string
}

export type StopwatchTimerProps = {
  duration: number
}

export type WatchHookProps = {
  duration: number
  started: boolean
  paused: boolean
  
  handleOnReset: () => any
  handleOnStart: () => any
  handleOnPause: () => any
}

export type StopwatchControlProps = {
  initial: number
} & WatchHookProps

export type ClockProps = {
  millis: number
  seconds: number
  minutes: number
}