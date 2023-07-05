import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient } from 'wagmi'
import { goerli, polygonMumbai } from 'wagmi/chains'
import BloctoConnector from './connectors/bloctoWalletConnectors'
// import { BloctoConnector } from '@blocto/wagmi-connector';



export const walletConnectProjectId = 'c1642a0a861332fe7ac8b5820f347dd4'

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, polygonMumbai],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const rpc = 'https://rpc.ankr.com/eth_goerli'

export const client = createClient({
  autoConnect: false,
  connectors: [
    new BloctoConnector({
      chains: [goerli, polygonMumbai],
      options: {
        chainId: goerli.id,
        rpc
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
