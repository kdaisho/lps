import { header, inner } from 'styles/Header.module.scss'
import React from 'react'
import cn from 'classnames'

const Header = () => {
  return (
    // <header className={styles.header}>
    <header className={header}>
      <div className={cn(inner, 'wrapper')}>
        <img
          className='logo'
          src='/static/lps-logo.png'
          alt='standing cowboy cat'
          width='150'
          height='150'
        />
        <h1>Last Person Standing</h1>
      </div>
    </header>
  )
}

export default Header
