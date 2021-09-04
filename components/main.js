import React, { useEffect, useRef, useState } from 'react'
import {
  container,
  mainContents,
  mainTimer,
  state,
} from 'styles/Main.module.scss'
import Buttons from 'components/buttons'
import { CURRENT } from 'components/constants'
import TimerDisplay from 'components/timerDisplay'
import { useTimerContext } from 'components/timerContext'

const Main = () => {
  const [currentState, setCurrentState] = useState('ready')
  const { current, time } = useTimerContext()
  let seconds = current === CURRENT.SIT ? time.sit : time.stand
  const prevTimeRef = useRef()
  const prevTime = prevTimeRef.current

  useEffect(() => {
    prevTimeRef.current = seconds
  }, [seconds])

  if (current === CURRENT.PAUSE) {
    seconds = prevTime
  }

  useEffect(() => {
    switch (true) {
      case current === CURRENT.RESET:
        setCurrentState('bye')
        break
      case current === CURRENT.SIT:
        setCurrentState(CURRENT.SIT)
        break
      case current === CURRENT.STAND:
        setCurrentState(CURRENT.STAND)
        break
      case current === CURRENT.PAUSE:
        setCurrentState(CURRENT.PAUSE)
        break
      default:
    }
  }, [current])
  return (
    <section className={container}>
      <div className={mainContents}>
        <Buttons />
        <p className={state}>{currentState}</p>
        <TimerDisplay seconds={seconds} mainTimer={mainTimer} />
      </div>
    </section>
  )
}

export default Main
