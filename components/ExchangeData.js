import { abi } from '../constants/exchangeAbi'
import { exchangeContractAddress } from '../constants/exchangeContract'

import { useState, useEffect } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import UpdateQ from './UpdateQ'
import SwapForm from './SwapForm'

export default function ExchangeData() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { enableWeb3, isWeb3Enabled } = useMoralis()

  const { runContractFunction: getQapi } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'getQnumString',
    params: {},
  })

  const { runContractFunction: getXapi } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'getX',
    params: {},
  })

  const { runContractFunction: getYapi } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'getY',
    params: {},
  })

  const [xReserves, setxReserves] = useState('0')
  const [yReserves, setyReserves] = useState('0')
  const [q, setq] = useState('0')
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    refreshUiData()
  }, [rerender])

  async function refreshUiData() {
    const x = await getXapi()
    if (x) {
      setxReserves(x.toString())
    }

    const y = await getYapi()
    if (y) {
      setyReserves(y.toString())
    }

    const q = await getQapi()
    if (q) {
      setq(q.toString())
    }
  }

  // useEffect(
  // 	() => {
  // 		setInterval(() => {
  // 			setRerender(!rerender);
  // 		}, 3000);
  // 	},
  // 	[ rerender ]
  // );

  return (
    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {isWeb3Enabled ? (
        <div className="grid grid-cols-3 ">
          <div className="col-span-1 mx-auto">
            <UpdateQ />
          </div>
          <div className="col-span-1 max-w-sm mx-auto border-2 border-white rounded p-4">
            <button
              className="rounded mx-auto bg-green-500 text-3xl font-bold border-4 border-black p-2 hover:border-solid hover:blur-sm shadow-lg shadow-indigo-500/40"
              onClick={() => {
                refreshUiData()
              }}
            >
              Display Exchange Data
            </button>
            <div className="border-sky-50 rounded mx-auto p-4 m-4 hover:border-solid">
              <h3 className="text-white text-2xl font-semibold p-3">
                Token X: {xReserves}
              </h3>
              <h3 className="text-white text-2xl font-semibold p-3">
                Token Y: {yReserves}
              </h3>
              <h3 className="text-white text-2xl font-semibold p-3">
                q value: {q}
              </h3>
            </div>
          </div>
          <div className="col-span-1 mx-auto">
            <SwapForm />
          </div>
        </div>
      ) : (
        ''
      )}
      {/* <div>{rerender}</div> */}
    </div>
  )
}
