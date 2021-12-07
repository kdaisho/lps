import AppHead from 'next/head'
import React from 'react'

const Head = () => {
  return (
    <AppHead>
      <title>LPS - Last Person Standing</title>
      <meta
        name='description'
        content='Time management app for standing desk users'
      />
      <link rel='icon' href='/favicon.png' />
    </AppHead>
  )
}

export default Head
