import React, { useEffect } from 'react'
import { Button } from 'evergreen-ui'
import { CURRENT } from 'components/constants'
import handleTimer from './utils'
import styles from 'styles/Buttons.module.scss'

const Buttons = ({
  setStandSeconds,
  setSitSeconds,
  setStandTimerId,
  standTimerId,
  timerId,
  setTimerId,
  setCurrent,
  current,
}) => {
  const getPayload = type => ({
    setStandSeconds,
    setSitSeconds,
    setStandTimerId,
    standTimerId,
    setTimerId,
    timerId,
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
          clearInterval(timerId)
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
      <Button size='large' onClick={() => setCurrent(CURRENT.PAUSE)}>
        Pause
      </Button>
      <Button size='large' onClick={() => setCurrent(CURRENT.RESET)}>
        Reset
      </Button>
    </div>
  )
}

export default Buttons
