import { getHours, getMinutes, getSeconds } from 'components/timerDisplay/utils'
import React from 'react'

const TimerDisplay = ({ standSeconds, seconds, timerId }) => {
  const getTime = seconds => {
    return {
      h: getHours(seconds, timerId),
      m: getMinutes(seconds),
      s: getSeconds(seconds),
    }
  }

  return (
    <div>
      H:{getTime(seconds).h} Min:{getTime(seconds).m} Sec:
      {getTime(seconds).s}
    </div>
  )
}

export default TimerDisplay
