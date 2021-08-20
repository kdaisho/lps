import { container, timer } from 'styles/TopDisplay.module.scss'
import React from 'react'
import TimerDisplay from 'components/timerDisplay'
import cn from 'classnames'
import { useTimerContext } from 'components/timerContext'

const TopDisplay = ({ right }) => {
  const { sitTime, standTime } = useTimerContext()

  return (
    <div className={cn(container, right, 'inner-padding')}>
      <div className={timer}>
        <h2 title='standing'>🧍</h2>
        <TimerDisplay seconds={standTime} />
      </div>
      <div className={timer}>
        <h2 title='sitting'>🪑</h2>
        <TimerDisplay seconds={sitTime} />
      </div>
    </div>
  )
}

export default TopDisplay
