import { CURRENT, ONE_SECOND } from 'components/constants'

const toSeconds = ms => Math.floor((Date.now() - ms) / 1000)

const getCurrentSeconds = (startTime, offset) => {
  return toSeconds(startTime) + offset
}

export const handleTimer = ({
  time,
  setTime,
  timerId,
  setTimerId,
  type,
  startTime,
  offset,
}) => {
  switch (true) {
    case type === CURRENT.STAND: {
      const id = setInterval(() => {
        const stand = getCurrentSeconds(startTime.stand, offset.stand)
        setTime({ stand, sit: time.sit })
      }, ONE_SECOND)
      setTimerId({ stand: id, sit: timerId.sit })
      break
    }
    case type === CURRENT.SIT: {
      const id = setInterval(() => {
        const sit = getCurrentSeconds(startTime.sit, offset.sit)
        setTime({ stand: time.stand, sit })
      }, ONE_SECOND)
      setTimerId({ stand: timerId.stand, sit: id })
      break
    }
    case type === CURRENT.PAUSE: {
      clearInterval(timerId.stand)
      clearInterval(timerId.sit)
      break
    }
    case type === CURRENT.RESET: {
      clearInterval(timerId.stand)
      clearInterval(timerId.sit)
      setTime({
        sit: 0,
        stand: 0,
      })
      break
    }
    default:
      console.log('No action found')
  }
}
