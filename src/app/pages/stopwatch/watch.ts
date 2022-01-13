import { useCallback, useState } from 'react'

import { WatchHookProps } from '..'

export const useWatch = (initial: number = 0): WatchHookProps => {
  
  const [duration, setDuration] = useState <number> (initial)
  const [started, setStarted] = useState <boolean> (false)
  const [paused, setPaused] = useState <boolean> (true)

  const [timer, setTimer] = useState <NodeJS.Timer | null> (null)

  const handleOnStart = useCallback (() => {
    if (!timer) {
      const interval: NodeJS.Timer = setInterval (() => {
        setDuration ((current) => current + 10)
      }, 10)
      setStarted (true)
      setPaused (false)
      setTimer (interval)
    }
  }, [timer])

  const handleOnPause = useCallback (() => {
    setStarted (false)
    setPaused (true)
    setTimer (null)
    if (timer)
      clearInterval (timer)
  }, [timer])

  const handleOnReset = useCallback (() => {
    if (timer)
      clearInterval (timer)
    setTimer (null)
    setStarted (false)
    setPaused (true)
    setDuration (0)
  }, [timer])

  return {
    duration,
    started,
    paused,
    
    handleOnReset,
    handleOnStart,
    handleOnPause
  }
}