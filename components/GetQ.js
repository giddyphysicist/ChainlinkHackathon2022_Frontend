import { abi } from '../constants/exchangeAbi';
import { useState, useEffect } from 'react';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { exchangeContractAddress } from '../constants/exchangeContract';

export default function GetQ() {
	const [ hasMetamask, setHasMetamask ] = useState(false);
	const { enableWeb3, isWeb3Enabled } = useMoralis();

	const { data, error, runContractFunction: getQnumString, isFetching, isLoading } = useWeb3Contract({
		abi: abi,
		contractAddress: exchangeContractAddress, // your contract address here
		functionName: 'getQnumString',
		params: {}
	});

	const [ qnum, setQnum ] = useState('0');

	async function updateQvalue() {
		const qNumFromContract = (await getQnumString()).toString();
		setQnum(qNumFromContract);
	}

	useEffect(
		() => {
			if (isWeb3Enabled) {
				updateQvalue();
			}
		},
		[ isWeb3Enabled ]
	);

	// const qnum = runContractFunction();

	return <div>Qnum is {qnum}</div>;
}
