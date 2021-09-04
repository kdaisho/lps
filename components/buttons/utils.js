import { CURRENT, ONE_SECOND } from 'components/constants'

const setTotalSeconds = (start, time, setter, standOffset) => {
  const totalSeconds = Math.floor((Date.now() - start) / 1000)
  const offsetTime = totalSeconds + standOffset
  setter({ stand: offsetTime, sit: time.sit })
}

// TODO: create a generic function
const setTotalSitSeconds = (start, time, setter, sitOffset) => {
  const totalSeconds = Math.floor((Date.now() - start) / 1000)
  const offsetTime = totalSeconds + sitOffset
  setter({ stand: time.stand, sit: offsetTime })
}

const handleTimer = ({
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
      const id = setInterval(
        () => setTotalSeconds(startTime.stand, time, setTime, offset.stand),
        ONE_SECOND
      )
      setTimerId({ stand: id, sit: timerId.sit })
      break
    }
    case type === CURRENT.SIT: {
      const id = setInterval(
        () => setTotalSitSeconds(startTime.sit, time, setTime, offset.sit),
        ONE_SECOND
      )
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

export default handleTimer
