import { Icon } from 'web3uikit'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <a href="https://www.github.com/giddyphysicist">
        <Icon fill="#FFFFFF" size={48} svg="github" />
      </a>
    </div>
  )
}
