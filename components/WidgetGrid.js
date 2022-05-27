import { Widget } from 'web3uikit';
import TokenForm from './TokenForm';

export default function WidgetGrid() {
	return (
		<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
			<div style={{ gap: '20px', padding: '40px 20px' }}>
				<section className="container mx-auto p-4">
					<Widget>
						<TokenForm />
					</Widget>
				</section>
				<section className="" style={{ display: 'flex', gap: '20px' }}>
					<Widget info="Mainnet" title="ENVIRONMENT" />
					<Widget info="233,182" title="NUMBER OF USERS">
						<div className="text-3xl font-bold underline">CHART COMING SOON</div>
					</Widget>
				</section>
				<section style={{ display: 'flex', gap: '20px' }}>
					<Widget info="72%" title="CPU" />
					<Widget info="0 Bytes" title="NETWORK" />
					<Widget info="24%" title="RAM" />
					<Widget info="24%" title="DISK" />
				</section>
			</div>
		</div>
	);
}
