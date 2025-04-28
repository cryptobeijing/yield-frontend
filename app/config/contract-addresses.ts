/**
 * Contract addresses for different networks
 * Updated from deployment on April 26, 2024
 */

import { seiTestnet } from './sei-testnet'
import { baseSepolia, baseMainnet } from './base-networks'

type NetworkAddresses = {
  // Token contracts
  usdc: string
  principalToken: string
  yieldToken: string

  // Core protocol contracts
  treasury: string
  yieldProtocol: string
  fundsVault: string

  // Auxiliary contracts
  faucet: string
  merchant: string
}

export const contractAddresses: Record<number, NetworkAddresses> = {
  // SEI Testnet
  [seiTestnet.id]: {
    // Token contracts
    usdc: '0xED085EF15CeC545fB58860d3F2CE82bFdeDAF05A',
    principalToken: '0xD43F65Eb233A8DE49deE9aB2EB704a3FC496299f',
    yieldToken: '0xac2BF7131C544FC0B5B507F1c7D52DC2CCAa9536',

    // Core protocol contracts
    treasury: '0xEBD90985BF0d0323Ac063cf55c8e99058AaA18fe',
    yieldProtocol: '0x6A1d71564485565456Cc0BF38693c5F008A994E3',
    fundsVault: '0x372bA9DC67CAD621fD215B3733d9ffDCa09C047a',

    // Auxiliary contracts
    faucet: '0x1693fd7BBc0AE875694896048F6834ee74eE2aAE',
    merchant: '0xc2419fA385EaBd96EB23259E0d9B7E07DAb3f03E',
  },

  // Base Sepolia
  [baseSepolia.id]: {
    // Token contracts
    usdc: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
    principalToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment

    // Core protocol contracts
    treasury: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldProtocol: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    fundsVault: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment

    // Auxiliary contracts
    faucet: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    merchant: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
  },

  // Base Mainnet
  [baseMainnet.id]: {
    // Token contracts
    usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    principalToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment

    // Core protocol contracts
    treasury: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    yieldProtocol: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    fundsVault: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment

    // Auxiliary contracts
    faucet: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    merchant: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
  },
}
