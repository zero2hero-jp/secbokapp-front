import type { NextPage } from 'next'
import Head from 'next/head'

import {
  ReactElement,
  useState
} from 'react'

import { Layout } from 'components/Layout'
import { About } from 'components/About'

const Home: NextPage = () => {
  const [ children, setChildren ] = useState<ReactElement>(<About />)
  
  return (
    <>
      <Head>
        <title>SecBokApp</title>
      </Head>
      
      <Layout setChildren={setChildren}>
        { children }
      </Layout>
    </>
  )
}

export default Home
