import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import React from 'react'
import Sidebar from 'components/sidebar'
import styles from 'styles/Container.module.scss'

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className='inner-padding'>{children}</div>
      <Sidebar />
    </div>
  )
}

export default Container
