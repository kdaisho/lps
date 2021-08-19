import { HOUR_SECONDS } from 'components/constants'

export const getHours = (seconds, timerId) => {
  if (seconds / HOUR_SECONDS >= 24) {
    clearInterval(timerId)
    return '0'.padStart(2, '0')
  }
  if (seconds / HOUR_SECONDS >= 1) {
    return Math.floor(seconds / 60 / 60)
  } else {
    return '0'.padStart(2, '0')
  }
}

export const getMinutes = seconds => {
  if (seconds / 60 >= 60) {
    seconds = resetLocalSeconds(seconds)
  }
  if (seconds / 60 >= 1) {
    return Math.floor(seconds / 60)
  } else {
    return '0'.padStart(2, '0')
  }
}

const resetLocalSeconds = seconds => {
  return seconds - Math.floor(seconds / HOUR_SECONDS) * HOUR_SECONDS
}

export const getSeconds = seconds => {
  const sec = seconds % 60
  const secString = sec.toString()
  const displaySeconds =
    secString.length <= 1 ? secString.padStart(2, '0') : sec
  return displaySeconds
}
