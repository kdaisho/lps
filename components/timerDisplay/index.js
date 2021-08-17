import React, { useEffect, useState } from 'react'
import { HOUR_SECONDS, ONE_SECOND } from 'constants'
import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import styles from 'styles/Timer.module.scss'

const TimerDisplay = ({ seconds, timerId }) => {
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
