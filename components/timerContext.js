import { createContext, useContext, useEffect, useState } from 'react'

const TimerContext = createContext(0)

const TimerWrapper = ({ children }) => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const [sitTimerId, setSitTimerId] = useState(0)
  const [standTimerId, setStandTimerId] = useState(0)
  const [current, setCurrent] = useState('')
  const [standGap, setStandGap] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [sitGap, setSitGap] = useState(0)
  const [startSitTime, setStartSitTime] = useState(0)

  const [time, setTime] = useState({
    stand: 0,
    sit: 0,
  })

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
    standGap,
    setStandGap,
    startTime,
    setStartTime,
    sitGap,
    setSitGap,
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
