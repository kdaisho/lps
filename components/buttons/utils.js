import { CURRENT, ONE_SECOND } from 'components/constants'

const updateTime = setter => {
  setter(sec => sec + 1)
}

const handleTimer = ({
  setStandSeconds,
  setSitSeconds,
  setTimerId,
  timerId,
  setStandTimerId,
  standTimerId,
  type,
}) => {
  switch (true) {
    case type === CURRENT.STAND: {
      const id = setInterval(() => updateTime(setStandSeconds), ONE_SECOND)
      setStandTimerId(id)
      break
    }
    case type === CURRENT.SIT: {
      const id = setInterval(() => updateTime(setSitSeconds), ONE_SECOND)
      setTimerId(id)
      break
    }
    case type === CURRENT.PAUSE: {
      clearInterval(timerId)
      clearInterval(standTimerId)
      break
    }
    case type === CURRENT.RESET: {
      clearInterval(timerId)
      clearInterval(standTimerId)
      setSitSeconds(0)
      setStandSeconds(0)
      break
    }
    default:
      console.log('No action found')
  }
}

export default handleTimer
