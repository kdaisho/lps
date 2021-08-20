import '../styles/globals.css'
// import TimerContext from 'components/timerContext'
import { TimerWrapper } from 'components/timerContext'

function Lps({ Component, pageProps }) {
  return (
    <TimerWrapper>
      <Component {...pageProps} />
    </TimerWrapper>
  )
}

export default Lps
