import { header, inner, left, right, text } from 'styles/Header.module.scss'
import HeadDisplay from 'components/headDisplay'
import React from 'react'
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
          <div className={text}>
            <h1>Last Person Standing</h1>
            <p>The most loved standing desk timer</p>
          </div>
        </div>
        <HeadDisplay right={right} />
      </div>
    </header>
  )
}

export default Header
