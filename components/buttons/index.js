import React, { useEffect, useState } from 'react'
import { button, buttons, isPause, isReset } from 'styles/Buttons.module.scss'
import { CURRENT } from 'components/constants'
import cn from 'classnames'
import handleTimer from './utils'
import { useTimerContext } from 'components/timerContext'

const Buttons = () => {
  const [startTime, setStartTime] = useState(0)
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
  } = useTimerContext()

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

  useEffect(() => {
    if (current) {
      setStartTime(Date.now())
      if (current === CURRENT.STAND) {
        console.log('=== setting gap for stand', current, standTime)
        setStandGap(standTime)
      }
      handleTimer(getPayload(current))
    }
  }, [current])

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
