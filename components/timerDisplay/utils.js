import { HOUR_SECONDS } from 'constants'

export const getHours = (seconds, timerId) => {
  if (seconds / HOUR_SECONDS >= 24) {
    clearInterval(timerId)
    return 0
  }
  if (seconds / HOUR_SECONDS >= 1) {
    return Math.floor(seconds / 60 / 60)
  } else {
    return 0
  }
}

export const getMinutes = seconds => {
  if (seconds / 60 >= 60) {
    seconds = resetLocalSeconds(seconds)
  }
  if (seconds / 60 >= 1) {
    return Math.floor(seconds / 60)
  } else {
    return 0
  }
}

const resetLocalSeconds = seconds => {
  return seconds - Math.floor(seconds / HOUR_SECONDS) * HOUR_SECONDS
}

export const getSeconds = seconds => {
  return seconds % 60
}
