import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import React from 'react'
import cn from 'classnames'
import { timer } from 'styles/TimerDisplay.module.scss'
import { useTimerContext } from 'components/timerContext'

const TimerDisplay = ({ seconds, mainTimer }) => {
  const { sitTimerId, standTimerId } = useTimerContext()

  const getTime = seconds => {
    return {
      h: getHours(seconds, sitTimerId, standTimerId),
      m: getMinutes(seconds),
      s: getSeconds(seconds),
    }
  }

  return (
    <div className={cn(timer, mainTimer)}>
      {getTime(seconds).h}:{getTime(seconds).m}:{getTime(seconds).s}
    </div>
  )
}

export default TimerDisplay
