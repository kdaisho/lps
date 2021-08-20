import React, { useEffect } from 'react'
import { Button } from 'evergreen-ui'
import { CURRENT } from 'components/constants'
import handleTimer from './utils'
import styles from 'styles/Buttons.module.scss'
import { useTimerContext } from 'components/timerContext'

const Buttons = () => {
  const {
    sitTimerId,
    standTimerId,
    current,
    setSitTime,
    setStandTime,
    setSitTimerId,
    setStandTimerId,
    setCurrent,
  } = useTimerContext()

  const getPayload = type => ({
    sitTimerId,
    standTimerId,
    setSitTime,
    setStandTime,
    setSitTimerId,
    setStandTimerId,
    type,
  })

  useEffect(() => {
    if (current) {
      handleTimer(getPayload(current))
    }
  }, [current])

  return (
    <div className={styles.container}>
      <Button
        size='large'
        onClick={() => {
          setCurrent(CURRENT.STAND)
          clearInterval(sitTimerId)
        }}
      >
        Stand
      </Button>
      <Button
        size='large'
        onClick={() => {
          setCurrent(CURRENT.SIT)
          clearInterval(standTimerId)
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

export default Buttons
