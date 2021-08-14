import { ONE_SECOND } from 'constants'

const updateTime = setter => {
  setter(sec => sec + 1)
}

const handleTimer = ({ setSeconds, setTimerId, timerId, type }) => {
  switch (true) {
    case type === 'start':
      const id = setInterval(() => updateTime(setSeconds), ONE_SECOND)
      setTimerId(id)
      break
    case type === 'stop':
      clearInterval(timerId)
      break
    default:
      console.log('No action')
  }
}

export { handleTimer }
