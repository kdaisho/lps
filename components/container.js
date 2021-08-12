import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import React from 'react'

const Container = ({ children, ...styles }) => {
  console.log(styles)
  return (
    <div className={styles.container}>
      <Pane maxWidth='960px' marginX='auto' width='100%' {...styles}>
        {children}
      </Pane>
      <h2>Ha ha ha</h2>
      <Button>Click me!</Button>
      <Text>This is a clickable Button</Text>
    </div>
  )
}

export default Container
