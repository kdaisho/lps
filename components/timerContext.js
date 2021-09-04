import { createContext, useContext, useEffect, useState } from 'react'

const TimerContext = createContext(0)

const TimerWrapper = ({ children }) => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const initialTimeState = {
    stand: 0,
    sit: 0,
  }
  const [sitTimerId, setSitTimerId] = useState(0)
  const [standTimerId, setStandTimerId] = useState(0)
  const [current, setCurrent] = useState('')
  const [startTime, setStartTime] = useState(0)
  const [offset, setOffset] = useState(initialTimeState)
  const [startSitTime, setStartSitTime] = useState(0)
  const [time, setTime] = useState(initialTimeState)

  useEffect(() => {
    console.log('stand timer id', standTimerId)
  }, [standTimerId])

  useEffect(() => {
    console.log('sit timer id', sitTimerId)
  }, [sitTimerId])

  const timeContext = {
    sitTimerId,
    standTimerId,
    current,
    setSitTimerId,
    setStandTimerId,
    setCurrent,
    startTime,
    setStartTime,
    offset,
    setOffset,
    startSitTime,
    setStartSitTime,
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
