import React, { useEffect, useState } from 'react'
import Timer from 'components/timer'
import TimerDisplay from 'components/timerDisplay'
import styles from 'styles/Landing.module.scss'

const Landing = () => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const [seconds, setSeconds] = useState(0)
  const [standSeconds, setStandSeconds] = useState(0)
  const [timerId, setTimerId] = useState(0)
  const [standTimerId, setStandTimerId] = useState(0)
  const [current, setCurrent] = useState('sitting')

  useEffect(() => {
    console.log('=== Stand seconds', standSeconds)
  }, [standSeconds])

  useEffect(() => {
    console.log('=== standTimerId', standTimerId)
  }, [standTimerId])

  useEffect(() => {
    console.log('=== Sit seconds', seconds)
  }, [seconds])

  return (
    <div className={styles.container}>
      <Timer
        setStandSeconds={setStandSeconds}
        setSeconds={setSeconds}
        standSeconds={standSeconds}
        timerId={timerId}
        setTimerId={setTimerId}
        standTimerId={standTimerId}
        setStandTimerId={setStandTimerId}
        setCurrent={setCurrent}
      />
      <TimerDisplay
        standSeconds={standSeconds}
        seconds={current === 'sit' ? seconds : standSeconds}
        timerId={timerId}
      />
    </div>
  )
}

export default Landing
