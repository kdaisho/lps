import { header, inner, left, right, text } from 'styles/Header.module.scss'
import React from 'react'
import TopDisplay from 'components/topDisplay'
import cn from 'classnames'

const Header = () => {
  return (
    <header className={header}>
      <div className={cn('wrapper', inner)}>
        <div className={left}>
          <img
            className='logo'
            src='https://res.cloudinary.com/de9x7yfyb/image/upload/v1638852581/lps/lps-logo-opt_ocuocy.webp'
            alt='standing cowcat'
            width='175'
            height='175'
          />
          <div className={text}>
            <h1>Last Person Standing</h1>
            <p>The most loved standing desk timer</p>
          </div>
        </div>
        <TopDisplay right={right} />
      </div>
    </header>
  )
}

export default Header
