import { Form } from 'web3uikit';

export default function TokenForm() {
	return (
		<div className="mx-auto">
			<select className="p-4 m-4 rounded mx-auto text-black bg-sky" placeholder="input token">
				<option>wBTC</option>
				<option>wETH</option>
				<option>USDC</option>
			</select>
			<div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto">
				<Form
					className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
					buttonConfig={{
						onClick: function noRefCheck() {},
						theme: 'primary'
					}}
					data={[
						{
							name: 'Input Token',
							selectOptions: [
								{
									id: 'weth',
									label: 'Wrapped Eth'
								},
								{
									id: 'wbtc',
									label: 'Wrapped BTC'
								},
								{
									id: 'usdc',
									label: 'USDC'
								}
							],
							type: 'select',
							value: ''
						},
						{
							name: 'Output Token',
							selectOptions: [
								{
									id: 'weth',
									label: 'Wrapped Eth'
								},
								{
									id: 'wbtc',
									label: 'Wrapped BTC'
								},
								{
									id: 'usdc',
									label: 'USDC'
								}
							],
							type: 'select',
							value: ''
						}
					]}
					onSubmit={function noRefCheck() {}}
					title="Swap"
				/>
			</div>
		</div>
	);
}
