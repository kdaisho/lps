import { createContext, useContext, useEffect, useState } from 'react'

const TimerContext = createContext(0)

const TimerWrapper = ({ children }) => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const initialTimerState = {
    stand: 0,
    sit: 0,
  }
  const [timerId, setTimerId] = useState(initialTimerState)
  const [current, setCurrent] = useState('')
  const [offset, setOffset] = useState(initialTimerState)
  const [startTime, setStartTime] = useState(initialTimerState)
  const [time, setTime] = useState(initialTimerState)

  const timeContext = {
    current,
    timerId,
    setTimerId,
    setCurrent,
    startTime,
    setStartTime,
    offset,
    setOffset,
    time,
    setTime,
  }

  return (
    <TimerContext.Provider value={timeContext}>
      {children}
    </TimerContext.Provider>
  )
}

const useTimerContext = () => {
  return useContext(TimerContext)
}

export { TimerWrapper, useTimerContext }
