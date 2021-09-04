import React, { useEffect } from 'react'
import { button, buttons, isPause, isReset } from 'styles/Buttons.module.scss'
import { CURRENT } from 'components/constants'
import cn from 'classnames'
import handleTimer from './utils'
import { useTimerContext } from 'components/timerContext'

const Buttons = () => {
  const {
    current,
    timerId,
    setTimerId,
    setCurrent,
    offset,
    setOffset,
    startTime,
    setStartTime,
    time,
    setTime,
  } = useTimerContext()

  useEffect(() => {
    const getPayload = type => ({
      time,
      setTime,
      timerId,
      setTimerId,
      type,
      startTime,
      offset,
      setOffset,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
    return () => {
      clearTimeout(timerId.stand)
      clearTimeout(timerId.sit)
    }
  }, [startTime.stand])

  useEffect(() => {
    const getPayload = type => ({
      time,
      setTime,
      timerId,
      setTimerId,
      type,
      startTime,
      offset,
      setOffset,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
  }, [startTime.sit])

  useEffect(() => {
    if (current !== CURRENT.SIT) {
      setStartTime({ stand: Date.now(), sit: startTime.sit })
      setOffset({ stand: time.stand, sit: offset.sit })
    }
    if (current !== CURRENT.STAND) {
      setStartTime({ stand: startTime.stand, sit: Date.now() })
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
            clearInterval(timerId.sit)
          }}
        >
          Stand
        </button>
        <button
          className={button}
          size='large'
          onClick={() => {
            setCurrent(CURRENT.SIT)
            clearInterval(timerId.stand)
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
