import { header, inner } from 'styles/Header.module.scss'
import Image from 'next/image'
import React from 'react'
import cn from 'classnames'

const Header = () => {
  return (
    <header className={header}>
      <div className={cn('wrapper', inner)}>
        <Image
          src='https://lps-images.s3.amazonaws.com/lps-logo.png'
          alt='standing cowcat'
          height='175'
          width='175'
        />
        <h1>Last Person Standing</h1>
      </div>
    </header>
  )
}

export default Header
