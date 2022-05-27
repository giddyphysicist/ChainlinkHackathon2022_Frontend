import { abi } from '../constants/exchangeAbi'
import { exchangeContractAddress } from '../constants/exchangeContract'
import { useState, useEffect } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'

export default function UpdateQ() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { enableWeb3, isWeb3Enabled } = useMoralis()
  const [rerender, setRerender] = useState(false)
  const [newq, setnewq] = useState('0.0')

  const [newqsign, setnewqsign] = useState(0)
  const [newqnum, setnewqnum] = useState(0)

  const {
    data,
    error,
    runContractFunction: updateQ,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: exchangeContractAddress, // your contract address here
    functionName: 'updateQ',
    params: {
      _qsign: newqsign,
      _qnum: newqnum,
    },
  })

  useEffect(() => {
    if (Number(newq) < 0) {
      setnewqsign(0)
    } else {
      setnewqsign(1)
    }
    if (newq === '-1.0' || newq === '1.0') {
      setnewqnum(10)
    } else if (newq === '-0.5' || newq == '0.5') {
      setnewqnum(5)
    } else {
      setnewqnum(0)
    }
  }, [newq])

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
          <button
            className="rounded w-full justify-center mx-auto bg-green-500 text-3xl font-bold border-4 border-black p-2 hover:border-solid hover:blur-sm shadow-lg shadow-indigo-500/40"
            onClick={() => {
              updateQ()
            }}
          >
            Update Q
          </button>
          <div className="mx-auto p-4 w-full ">
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
              aria-label="Choose New Q"
              onChange={(e) => setnewq(e.target.value)}
            >
              <option defaultValue>Choose New Q</option>
              <option value="-1.0">-1.0</option>
              <option value="-0.5">-0.5</option>
              <option value="0.0">0.0</option>
              <option value="0.5">0.5</option>
              <option value="1.0">1.0</option>
            </select>
          </div>
        </div>
      ) : (
        ''
      )}
      <div>
        <p>As q &#8594; +1, constant slope (stable-swap) </p>
        <p>As q &#8594; 0, constant product (uniswap)</p>
        <p>As q &#8594; -1, more curvature than uniswap</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <img
          src="symmetricQrange.png"
          className=" p-8 max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
          alt=""
        />
      </div>
    </div>
  )
}
