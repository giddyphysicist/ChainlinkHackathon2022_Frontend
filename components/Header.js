import { ConnectButton } from 'web3uikit'

export default function Header() {
  return (
    <div className="mx-auto p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <nav>
        <ConnectButton moralisAuth={false} />
      </nav>
    </div>
  )
}
