import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { enableWeb3, isWeb3Enabled } = useMoralis()

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setHasMetamask(true)
    }
  }, [])

  return (
    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Head>
        <title>AdMM | Adaptive Market Maker</title>
      </Head>

      {/* {hasMetamask ? isWeb3Enabled ? (
				'' //'Connected! '
			) : (
				<button
					className="rounded mx-auto bg-green-500 text-3xl font-bold border-4 border-black p-2 hover:border-solid hover:blur-sm shadow-lg shadow-indigo-500/40"
					onClick={() => enableWeb3()}
				>
					Connect
				</button>
			) : (
				'Please install metamask'
			)} */}
    </div>
  )
}
