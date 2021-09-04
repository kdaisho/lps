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
    startTime,
    setStartTime,
    offset,
    setOffset,
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
      startSitTime,
      offset,
      setOffset,
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
      startSitTime,
      offset,
      setOffset,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
  }, [startSitTime])

  useEffect(() => {
    if (current !== 'sit') {
      setStartTime(Date.now())
      setOffset({ stand: time.stand, sit: offset.sit })
    }
    if (current !== 'stand') {
      setStartSitTime(Date.now())
      setOffset({ stand: offset.stand, sit: time.sit })
    }
  }, [current, setOffset])

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
