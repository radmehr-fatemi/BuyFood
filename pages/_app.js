import '../styles/globals.scss'
import "../styles/Keyframes.scss"
import "../styles/variables.scss"

//Component
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
