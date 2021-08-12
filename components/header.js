import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import Image from 'next/image'
import React from 'react'
import styles from 'styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src='/lps-logo.png'
        alt='standing cowboy cat'
        width='128'
        height='128'
      />
      <h1>Last Person Standing V2</h1>
    </header>
  )
}

export default Header
