import React from 'react'
import TimerDisplay from 'components/timerDisplay'
import styles from 'styles/Sidebar.module.scss'

const Sidebar = ({ sitSeconds, standSeconds, timerId }) => {
  return (
    <div className={`${styles.container} inner-padding`}>
      <h2>Stand</h2>
      <TimerDisplay
        standSeconds={standSeconds}
        seconds={standSeconds}
        timerId={timerId}
      />
      <h2>Sit</h2>
      <TimerDisplay
        standSeconds={standSeconds}
        seconds={sitSeconds}
        timerId={timerId}
      />
    </div>
  )
}

export default Sidebar
