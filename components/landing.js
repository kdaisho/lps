import React, { useState } from 'react'
import Timer from 'components/timer'
import TimerDisplay from 'components/timerDisplay'
import styles from 'styles/Landing.module.scss'

const Landing = () => {
  const [seconds, setSeconds] = useState(0)

  return (
    <div className={styles.container}>
      <Timer setSeconds={setSeconds} />
      <TimerDisplay seconds={seconds} />
    </div>
  )
}

export default Landing
