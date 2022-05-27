// import { abi } from '../constants/exchangeAbi';
// import { useState, useEffect } from 'react';
// import { useMoralis, useWeb3Contract } from 'react-moralis';

// export default function SwapForm() {
// 	return (
// 		<div>
// 			<button
// 				className="rounded justify-center mx-auto bg-green-500 text-3xl font-bold border-4 border-black p-2 hover:border-solid hover:blur-sm shadow-lg shadow-indigo-500/40"
// 				onClick={() => {
// 					console.log('swap');
// 				}}
// 			>
// 				Swap
// 			</button>
// 		</div>
// 	);
// }

import { abi } from '../constants/exchangeAbi'
import { exchangeContractAddress } from '../constants/exchangeContract'

import { useState, useEffect } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import GetQ from './GetQ'

export default function SwapForm() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { enableWeb3, isWeb3Enabled } = useMoralis()
  const [rerender, setRerender] = useState(false)
  const [newq, setnewq] = useState('0.0')

  const [newqsign, setnewqsign] = useState(0)
  const [newqnum, setnewqnum] = useState(0)

  const [inputAmount, setInputAmount] = useState('0')
  const [dx, setdx] = useState(0)
  const [dy, setdy] = useState(0)
  const [whichTokenToTradeIn, setWhichTokenToTradeIn] = useState('x')

  const { runContractFunction: swapXforY } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'swapXforY',
    params: {
      _dx: dx,
    },
  })

  const { runContractFunction: swapYforX } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'swapYforX',
    params: {
      _dy: dy,
    },
  })

  useEffect(() => {
    console.log(whichTokenToTradeIn)
    if (whichTokenToTradeIn === 'x') {
      setdx(Number(inputAmount))
      // console.log(dx);
    } else {
      setdy(Number(inputAmount))
      // console.log(dy);
    }
  }, [whichTokenToTradeIn, inputAmount])

  // useEffect(
  // 	() => {
  // 		setInterval(() => {
  // 			setRerender(!rerender);
  // 		}, 3000);
  // 	},
  // 	[ rerender ]
  // );

  return (
    <div className="mx-auto">
      {isWeb3Enabled ? (
        <div className="mx-auto">
          <div className="mx-auto">
            <button
              className="rounded px-12 bg-green-500 text-3xl w-full font-bold border-4 border-black py-2 hover:blur-sm shadow-lg shadow-indigo-500/40"
              onClick={() => {
                console.log('TRYING TO SWAP...')

                if (whichTokenToTradeIn === 'x') {
                  swapXforY()
                } else {
                  swapYforX()
                }
              }}
            >
              Swap
            </button>
          </div>
          <div className="mx-auto py-4">
            <h1>Choose Token to Trade In:</h1>
            <select
              className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Choose Token To Trade"
              onChange={(e) => {
                setWhichTokenToTradeIn(e.target.value)
              }}
            >
              <option defaultValue>Choose Which Token</option>
              <option value="x">X</option>
              <option value="y">Y</option>
            </select>
            <h1 className="pt-4">Choose Amount to Trade In:</h1>
            <input
              className="m-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md shadow-sm p-4"
              placeholder="input amount to trade"
              type="number"
              name="how much to trade in"
              onChange={(e) => {
                setInputAmount(Number(e.target.value))
              }}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
