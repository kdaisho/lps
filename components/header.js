import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import React from 'react'
import styles from 'styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className='logo'
        src='/static/lps-logo.png'
        alt='standing cowboy cat'
        width='150'
        height='150'
      />
      <h1>Last Person Standing</h1>
    </header>
  )
}

export default Header
