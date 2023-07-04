import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient } from 'wagmi'
import { mainnet } from 'wagmi/chains'
// import BloctoConnector from './connectors/bloctoWalletConnectors'
import { BloctoConnector } from '@blocto/wagmi-connector';



export const walletConnectProjectId = 'c1642a0a861332fe7ac8b5820f347dd4'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const client = createClient({
  autoConnect: false,
  connectors: [
    new BloctoConnector({
      chains: [mainnet],
      options: {
        chainId: '0x1',
        rpc: 'https://mainnet.infura.io/v3/f5f39cce910e421c81f3c6c646e003a6'
      }
    })
    ,...w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 1,
  })],
  provider,
  webSocketProvider,
})

export { chains }
