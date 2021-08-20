import { container, timer } from 'styles/HeadDisplay.module.scss'
import React from 'react'
import TimerDisplay from 'components/timerDisplay'
import cn from 'classnames'
import { useTimerContext } from 'components/timerContext'

const HeadDisplay = ({ right }) => {
  const { sitTime, standTime } = useTimerContext()

  return (
    <div className={cn(container, right, 'inner-padding')}>
      <div className={timer}>
        <h2 title='stand'>🧍</h2>
        <TimerDisplay seconds={standTime} />
      </div>
      <div className={timer}>
        <h2 title='sit'>🪑</h2>
        <TimerDisplay seconds={sitTime} />
      </div>
    </div>
  )
}

export default HeadDisplay