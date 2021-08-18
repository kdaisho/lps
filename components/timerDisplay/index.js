import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import React from 'react'
import styles from 'styles/Timer.module.scss'

const TimerDisplay = ({ standSeconds, seconds, timerId }) => {
  const getTime = seconds => {
    return {
      h: getHours(seconds, timerId),
      m: getMinutes(seconds),
      s: getSeconds(seconds),
    }
  }

  return (
    <div className={styles.container}>
      <div>
        H:{getTime(seconds).h} Min:{getTime(seconds).m} Sec:
        {getTime(seconds).s}
      </div>
    </div>
  )
}

export default TimerDisplay
