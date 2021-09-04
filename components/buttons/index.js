import React, { useEffect } from 'react'
import { button, buttons, isPause, isReset } from 'styles/Buttons.module.scss'
import { CURRENT } from 'components/constants'
import cn from 'classnames'
import handleTimer from './utils'
import { useTimerContext } from 'components/timerContext'

const Buttons = () => {
  const {
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
  } = useTimerContext()

  useEffect(() => {
    const getPayload = type => ({
      sitTimerId,
      standTimerId,
      time,
      setTime,
      setSitTimerId,
      setStandTimerId,
      type,
      startTime,
      standGap,
      setStandGap,
      startSitTime,
      sitGap,
      setSitGap,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
    return () => {
      clearTimeout(standTimerId)
    }
  }, [startTime])

  useEffect(() => {
    const getPayload = type => ({
      sitTimerId,
      standTimerId,
      time,
      setTime,
      setSitTimerId,
      setStandTimerId,
      type,
      startTime,
      standGap,
      setStandGap,
      startSitTime,
      sitGap,
      setSitGap,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
  }, [startSitTime])

  useEffect(() => {
    if (current !== 'sit') {
      setStartTime(Date.now())
      setStandGap(time.stand)
    }
    if (current !== 'stand') {
      setStartSitTime(Date.now())
      setSitGap(time.sit)
    }
  }, [current, setStandGap, setSitGap])

  return (
    <div className={buttons}>
      <div>
        <button
          className={button}
          size='large'
          onClick={() => {
            setCurrent(CURRENT.STAND)
            clearInterval(sitTimerId)
          }}
        >
          Stand
        </button>
        <button
          className={button}
          size='large'
          onClick={() => {
            setCurrent(CURRENT.SIT)
            clearInterval(standTimerId)
          }}
        >
          Sit
        </button>
      </div>
      <div>
        <button
          className={cn(button, isPause)}
          size='large'
          onClick={() => setCurrent(CURRENT.PAUSE)}
        >
          Pause
        </button>
        <button
          className={cn(button, isReset)}
          size='large'
          onClick={() => setCurrent(CURRENT.RESET)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Buttons
