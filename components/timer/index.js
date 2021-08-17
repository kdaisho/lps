import { Button } from 'evergreen-ui'
import React from 'react'
import { handleTimer } from './utils'
import styles from 'styles/Timer.module.scss'

const Timer = ({ setSeconds, timerId, setTimerId }) => {
  const getPayload = type => ({
    setSeconds,
    setTimerId,
    timerId,
    type,
  })

  return (
    <div className={styles.container}>
      <Button size='large' onClick={() => handleTimer(getPayload('start'))}>
        Start
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
