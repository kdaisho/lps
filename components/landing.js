import React, { useState } from 'react'
import Timer from 'components/timer'
import TimerDisplay from 'components/timerDisplay'
import styles from 'styles/Landing.module.scss'

const Landing = () => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const [seconds, setSeconds] = useState(0)
  const [timerId, setTimerId] = useState(0)

  return (
    <div className={styles.container}>
      <Timer
        setSeconds={setSeconds}
        timerId={timerId}
        setTimerId={setTimerId}
      />
      <TimerDisplay seconds={seconds} timerId={timerId} />
    </div>
  )
}

export default Landing
