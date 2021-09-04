import React, { useEffect } from 'react'
import { button, buttons, isPause, isReset } from 'styles/Buttons.module.scss'
import { CURRENT } from 'components/constants'
import cn from 'classnames'
import { handleTimer } from './utils'
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

  useEffect(() => {
    handleTimer(getPayload(current))
  }, [startTime])

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
          onClick={() => {
            setCurrent(CURRENT.STAND)
            clearInterval(timerId.sit)
          }}
        >
          Stand
        </button>
        <button
          className={button}
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
          onClick={() => setCurrent(CURRENT.PAUSE)}
        >
          Pause
        </button>
        <button
          className={cn(button, isReset)}
          onClick={() => setCurrent(CURRENT.RESET)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Buttons
