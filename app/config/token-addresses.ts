/**
 * Token addresses for different networks
 * Updated from deployment on April 26, 2024
 */

import { seiTestnet } from './sei-testnet'
import { baseSepolia, baseMainnet } from './base-networks'

type TokenAddresses = {
  // Native token doesn't need an address as it's the native currency
  sei: null
  // Mock USDC token address from the contract deployment
  usdc: string
  // Principal token address
  principalToken: string
  // Yield token address
  yieldToken: string
}

type TokenMetadata = {
  name: string
  symbol: string
  decimals: number
}

export const tokenAddresses: Record<number, TokenAddresses> = {
  // SEI Testnet
  [seiTestnet.id]: {
    sei: null,
    usdc: '0xDb8F9c652f613FAdB680daE048642D0e6AC8F733',
    principalToken: '0x635f07BaB844533557dB2CC7bf8F515371e884E1',
    yieldToken: '0x62D7c9a5462a69aC2e59B96DfdC3572b3f365f3e',
  },

  // Base Sepolia
  [baseSepolia.id]: {
    sei: null,
    usdc: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
    principalToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
  },

  // Base Mainnet
  [baseMainnet.id]: {
    sei: null,
    usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    principalToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
  },
}

/**
 * Token metadata
 */
export const tokenMetadata: Record<number, Record<string, TokenMetadata>> = {
  [seiTestnet.id]: {
    sei: {
      name: 'SEI',
      symbol: 'SEI',
      decimals: 18,
    },
    usdc: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
    },
  },
  [baseSepolia.id]: {
    eth: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    usdc: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
    },
  },
  [baseMainnet.id]: {
    eth: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    usdc: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
    },
  },
}
