import React, { useEffect, useState } from 'react'
import { Button } from 'evergreen-ui'
import { handleTimer } from './utils'
import styles from 'styles/Timer.module.scss'

const Timer = ({ setSeconds }) => {
  const [timerId, setTimerId] = useState(0)

  useEffect(() => {
    console.log({ timerId })
  }, [timerId])

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
      <Button size='large' onClick={() => handleTimer(getPayload('stop'))}>
        Stop
      </Button>
    </div>
  )
}

export default Timer
