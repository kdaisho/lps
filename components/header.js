import { header, inner, left, right } from 'styles/Header.module.scss'
import React from 'react'
import Sidebar from 'components/sidebar'
import cn from 'classnames'

const Header = () => {
  return (
    <header className={header}>
      <div className={cn('wrapper', inner)}>
        <div className={left}>
          <img
            className='logo'
            src='https://lps-images.s3.amazonaws.com/lps-logo.png'
            alt='standing cowcat'
            width='175'
            height='175'
          />
          <h1>Last Person Standing</h1>
        </div>
        <Sidebar className={right} />
      </div>
    </header>
  )
}

export default Header
