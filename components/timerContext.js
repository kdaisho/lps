import { createContext, useContext, useState } from 'react'

const TimerContext = createContext(0)

const TimerWrapper = ({ children }) => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const [sitTime, setSitTime] = useState(0)
  const [standTime, setStandTime] = useState(0)
  const [sitTimerId, setSitTimerId] = useState(0)
  const [standTimerId, setStandTimerId] = useState(0)
  const [current, setCurrent] = useState('')
  const [standGap, setStandGap] = useState(0)
  const [startTime, setStartTime] = useState(0)

  const time = {
    sitTime,
    standTime,
    sitTimerId,
    standTimerId,
    current,
    setSitTime,
    setStandTime,
    setSitTimerId,
    setStandTimerId,
    setCurrent,
    standGap,
    setStandGap,
    startTime,
    setStartTime,
  }

  return <TimerContext.Provider value={time}>{children}</TimerContext.Provider>
}

const useTimerContext = () => {
  return useContext(TimerContext)
}

export { TimerWrapper, useTimerContext }
