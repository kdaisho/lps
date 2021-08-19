import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import React from 'react'
import styles from 'styles/TimerDisplay.module.scss'

const TimerDisplay = ({ seconds, timerId }) => {
  const getTime = seconds => {
    return {
      h: getHours(seconds, timerId),
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
