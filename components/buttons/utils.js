import { ONE_SECOND } from 'constants'

const updateTime = setter => {
  setter(sec => sec + 1)
}

const handleTimer = ({
  setStandSeconds,
  setSeconds,
  setTimerId,
  timerId,
  setStandTimerId,
  standTimerId,
  type,
}) => {
  console.log('===== type', type)
  switch (true) {
    case type === 'stand': {
      const id = setInterval(() => updateTime(setStandSeconds), ONE_SECOND)
      setStandTimerId(id)
      break
    }
    case type === 'sit': {
      const id = setInterval(() => updateTime(setSeconds), ONE_SECOND)
      setTimerId(id)
      break
    }
    case type === 'pause': {
      console.log('stand timer id: sit', timerId)
      console.log('stand timer id: stand', standTimerId)
      clearInterval(timerId)
      clearInterval(standTimerId)
      break
    }
    case type === 'reset': {
      clearInterval(timerId)
      clearInterval(standTimerId)
      setSeconds(0)
      setStandSeconds(0)
      break
    }
    default:
      console.log('No action')
  }
}

export { handleTimer }
