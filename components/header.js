import { Button, Pane, Text, majorScale } from 'evergreen-ui'
// import Image from 'next/image'
import React from 'react'
import styles from 'styles/Header.module.scss'
// import logo from './lps-logo.png'

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
      <h1>Last Person Standing V3</h1>
    </header>
  )
}

export default Header
