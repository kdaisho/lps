import React, { useEffect, useState } from 'react'
import Buttons from 'components/buttons'
import Sidebar from 'components/sidebar'
import styles from 'styles/Main.module.scss'

const Main = () => {
  // 1DAY: 86400 sec
  // 1HOUR: 3600 sec
  const [sitSeconds, setSitSeconds] = useState(0)
  const [standSeconds, setStandSeconds] = useState(0)
  const [timerId, setTimerId] = useState(0)
  const [standTimerId, setStandTimerId] = useState(0)
  const [current, setCurrent] = useState('')

  useEffect(() => {
    console.log('=== Stand sitSeconds', standSeconds)
  }, [standSeconds])

  useEffect(() => {
    console.log('=== standTimerId', standTimerId)
  }, [standTimerId])

  useEffect(() => {
    console.log('=== Sit sitSeconds', sitSeconds)
  }, [sitSeconds])

  return (
    <section className={styles.container}>
      <div className={styles.mainContents}>
        <Buttons
          setStandSeconds={setStandSeconds}
          setSitSeconds={setSitSeconds}
          standSeconds={standSeconds}
          timerId={timerId}
          setTimerId={setTimerId}
          standTimerId={standTimerId}
          setStandTimerId={setStandTimerId}
          setCurrent={setCurrent}
          current={current}
        />
      </div>
      <Sidebar
        sitSeconds={sitSeconds}
        standSeconds={standSeconds}
        current={current}
        timerId={timerId}
      />
    </section>
  )
}

export default Main
