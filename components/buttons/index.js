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
    standTime,
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
  } = useTimerContext()

  useEffect(() => {
    const getPayload = type => ({
      sitTimerId,
      standTimerId,
      setSitTime,
      setStandTime,
      setSitTimerId,
      setStandTimerId,
      type,
      startTime,
      standGap,
      setStandGap,
    })
    if (current) {
      handleTimer(getPayload(current))
    }
  }, [startTime])

  useEffect(() => {
    setStartTime(Date.now())
    setStandGap(standTime)
  }, [current, setStandGap])

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
