import React, { useEffect, useState } from 'react'
import { ONE_SECOND } from 'constants'
import styles from 'styles/Timer.module.scss'

const TimerDisplay = ({ seconds }) => {
  const getTime = seconds => {
    if (ONE_SECOND) {
      return new Date(seconds * ONE_SECOND).toISOString().substr(11, 8)
    }
  }

  return (
    <div className={styles.container}>
      <div>{getTime(seconds)}</div>
    </div>
  )
}

export default TimerDisplay
