import { CURRENT, ONE_SECOND } from 'components/constants'

const updateTime = setter => {
  setter(sec => sec + 1)
}

const handleTimer = ({
  setStandTime,
  setSitTime,
  setSitTimerId,
  sitTimerId,
  setStandTimerId,
  standTimerId,
  type,
}) => {
  switch (true) {
    case type === CURRENT.STAND: {
      const id = setInterval(() => updateTime(setStandTime), ONE_SECOND)
      setStandTimerId(id)
      break
    }
    case type === CURRENT.SIT: {
      const id = setInterval(() => updateTime(setSitTime), ONE_SECOND)
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
      setSitTime(0)
      setStandTime(0)
      break
    }
    default:
      console.log('No action found')
  }
}

export default handleTimer
