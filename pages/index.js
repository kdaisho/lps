import Container from 'components/container'
import Head from 'components/head'
import Header from 'components/header'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'
import { useRouter } from 'next/router'

const Main = () => {
  const router = useRouter()
  const change = () => {
    const url = '/book'
    router.push(url)
  }
  return (
    <>
      <Head />
      <Header />
      <Container {...styles}>
        <Link href='/'>
          <a>Main</a>
        </Link>
        <br />
        <Link href='/book'>
          <a>Book</a>
        </Link>
        <button onClick={change}>Change</button>
      </Container>
    </>
  )
}

export default Main
