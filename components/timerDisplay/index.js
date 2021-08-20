import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import React from 'react'
import styles from 'styles/TimerDisplay.module.scss'
import { useTimerContext } from 'components/timerContext'

const TimerDisplay = ({ seconds }) => {
  const { sitTimerId, standTimerId } = useTimerContext()

  const getTime = seconds => {
    return {
      h: getHours(seconds, sitTimerId, standTimerId),
      m: getMinutes(seconds),
      s: getSeconds(seconds),
    }
  }

  return (
    <div className={styles.timer}>
      {getTime(seconds).h} : {getTime(seconds).m} : {getTime(seconds).s}
    </div>
  )
}

export default TimerDisplay
