import Container from 'components/container'
import Head from 'components/head'
import Header from 'components/header'
import Link from 'next/link'
import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import Landing from 'components/landing'
import { useRouter } from 'next/router'

const Main = () => {
  // const router = useRouter()
  // const change = () => {
  //   const url = '/book'
  //   router.push(url, null, { shallow: true })
  // }
  return (
    <>
      <Head />
      <Header />
      <Container>
        <Landing />
      </Container>
    </>
  )
}

export default Main
