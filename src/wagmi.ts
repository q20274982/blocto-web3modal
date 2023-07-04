import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient } from 'wagmi'
import { goerli } from 'wagmi/chains'
// import BloctoConnector from './connectors/bloctoWalletConnectors'
import { BloctoConnector } from '@blocto/wagmi-connector';



export const walletConnectProjectId = 'c1642a0a861332fe7ac8b5820f347dd4'

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const client = createClient({
  autoConnect: false,
  connectors: [
    new BloctoConnector({
      chains: [goerli],
      options: {
        chainId: goerli.id,
        rpc: 'https://rpc.ankr.com/eth_goerli'
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
