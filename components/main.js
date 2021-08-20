import Buttons from 'components/buttons'
import React from 'react'
import Sidebar from 'components/sidebar'
import styles from 'styles/Main.module.scss'

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainContents}>
        <Buttons />
      </div>
      <Sidebar />
    </section>
  )
}

export default Main
