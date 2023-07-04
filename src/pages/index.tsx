import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account, SendTransaction } from '../components'

function Page() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>wagmi + Web3Modal + Next.js</h1>

      <Web3Button />

      {isConnected && (
        <>
          <Account />
          <SendTransaction />
        </>
      )}
    </>
  )
}

export default Page
