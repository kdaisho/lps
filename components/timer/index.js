import { Button } from 'evergreen-ui'
import React from 'react'
import { handleTimer } from './utils'
import styles from 'styles/Timer.module.scss'

const Timer = ({
  setStandSeconds,
  setSeconds,
  setStandTimerId,
  standTimerId,
  timerId,
  setTimerId,
  setCurrent,
}) => {
  const getPayload = type => ({
    setStandSeconds,
    setSeconds,
    setStandTimerId,
    standTimerId,
    setTimerId,
    timerId,
    type,
  })

  return (
    <div className={styles.container}>
      <Button
        size='large'
        onClick={() => {
          setCurrent('stand')
          clearInterval(timerId)
          handleTimer(getPayload('stand'))
        }}
      >
        Stand
      </Button>
      <Button
        size='large'
        onClick={() => {
          setCurrent('sit')
          clearInterval(standTimerId)
          handleTimer(getPayload('sit'))
        }}
      >
        Sit
      </Button>
      <Button size='large' onClick={() => handleTimer(getPayload('pause'))}>
        Pause
      </Button>
      <Button size='large' onClick={() => handleTimer(getPayload('reset'))}>
        Reset
      </Button>
    </div>
  )
}

export default Timer
