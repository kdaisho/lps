import { HOUR_SECONDS, STRING_ZERO } from 'components/constants'
import { clearIntervals } from 'components/utils'

export const getHours = (seconds, timerId) => {
  if (seconds / HOUR_SECONDS >= 24) {
    clearIntervals(timerId)
    return STRING_ZERO.padStart(2, STRING_ZERO)
  }
  if (seconds / HOUR_SECONDS >= 1) {
    const hourString = Math.floor(seconds / 60 / 60).toString()
    return hourString.padStart(2, STRING_ZERO)
  } else {
    return STRING_ZERO.padStart(2, STRING_ZERO)
  }
}

export const getMinutes = seconds => {
  if (seconds / 60 >= 60) {
    seconds = resetLocalSeconds(seconds)
  }
  const minString = Math.floor(seconds / 60).toString()
  return minString.padStart(2, STRING_ZERO)
}

const resetLocalSeconds = seconds => {
  return seconds - Math.floor(seconds / HOUR_SECONDS) * HOUR_SECONDS
}

export const getSeconds = seconds => {
  const sec = seconds % 60
  const secString = sec.toString()
  const displaySeconds =
    secString.length <= 1 ? secString.padStart(2, STRING_ZERO) : sec
  return displaySeconds
}
