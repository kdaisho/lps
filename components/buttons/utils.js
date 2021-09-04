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
  setSitTimerId,
  sitTimerId,
  setStandTimerId,
  standTimerId,
  type,
  startTime,
  startSitTime,
  offset,
}) => {
  switch (true) {
    case type === CURRENT.STAND: {
      const id = setInterval(
        () => setTotalSeconds(startTime, time, setTime, offset.stand),
        ONE_SECOND
      )
      setStandTimerId(id)
      break
    }
    case type === CURRENT.SIT: {
      console.log('offset sit', offset)
      const id = setInterval(
        () => setTotalSitSeconds(startSitTime, time, setTime, offset.sit),
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
