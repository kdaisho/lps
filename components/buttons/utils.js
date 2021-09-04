import { CURRENT, ONE_SECOND } from 'components/constants'

const updateTime = setter => {
  setter(sec => sec + 1)
}

const setTotalSeconds = (start, time, setter, standGap) => {
  const totalSeconds = Math.floor((Date.now() - start) / 1000)
  const offsetTime = totalSeconds + standGap
  setter({ stand: offsetTime, sit: time.sit })
}

// TODO: create a generic function
const setTotalSitSeconds = (start, time, setter, sitGap) => {
  const totalSeconds = Math.floor((Date.now() - start) / 1000)
  const offsetTime = totalSeconds + sitGap
  setter({ stand: time.stand, sit: offsetTime })
}

const handleTimer = ({
  time,
  setTime,
  setSitTimerId,
  sitTimerId,
  setStandTimerId,
  standTimerId,
  type,
  startTime,
  standGap,
  startSitTime,
  sitGap,
}) => {
  switch (true) {
    case type === CURRENT.STAND: {
      const id = setInterval(
        () => setTotalSeconds(startTime, time, setTime, standGap),
        ONE_SECOND
      )
      setStandTimerId(id)
      break
    }
    case type === CURRENT.SIT: {
      const id = setInterval(
        () => setTotalSitSeconds(startSitTime, time, setTime, sitGap),
        ONE_SECOND
      )
      setSitTimerId(id)
      break
    }
    case type === CURRENT.PAUSE: {
      clearInterval(sitTimerId)
      clearInterval(standTimerId)
      break
    }
    case type === CURRENT.RESET: {
      clearInterval(sitTimerId)
      clearInterval(standTimerId)
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
