import React from 'react'
import TimerDisplay from 'components/timerDisplay'
import styles from 'styles/Sidebar.module.scss'
import { useTimerContext } from 'components/timerContext'

const Sidebar = () => {
  const { sitTime, standTime } = useTimerContext()

  return (
    <div className={`${styles.container} inner-padding`}>
      <h2>Stand</h2>
      <TimerDisplay seconds={standTime} />
      <h2>Sit</h2>
      <TimerDisplay seconds={sitTime} />
    </div>
  )
}

export default Sidebar
