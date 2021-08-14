import Container from 'components/container'
import Head from 'components/head'
import Header from 'components/header'
import Landing from 'components/landing'

const Main = () => {
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
