import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TokenForm from '../components/TokenForm'
import WidgetGrid from '../components/WidgetGrid'
import GetQ from '../components/GetQ'
import UpdateQ from '../components/UpdateQ'
import ExchangeData from '../components/ExchangeData'
import { Chart } from 'chart.js'
import ChartDisplay from '../components/ChartDisplay'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />

      <Component {...pageProps} />

      <ExchangeData />
      {/* <ChartDisplay /> */}
      <Footer />
    </MoralisProvider>
  )
}

export default MyApp
