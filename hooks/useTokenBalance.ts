'use client'

import { useAccount, useBalance, useChainId } from 'wagmi'
import { tokenAddresses, tokenMetadata } from '@/app/config/token-addresses'

type AssetType = 'sei' | 'usdc' | 'eth'

/**
 * Custom hook to fetch token balance for a specific asset
 * @param asset The asset to fetch balance for ('sei', 'usdc', or 'eth')
 * @returns Object containing balance information and loading state
 */
export function useTokenBalance(asset: AssetType) {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  
  // Get the appropriate token address based on the current chain
  const tokenAddress = asset === 'sei' || asset === 'eth' 
    ? undefined 
    : tokenAddresses[chainId]?.[asset] as `0x${string}`

  const { data, isError, isLoading, refetch } = useBalance({
    address: isConnected ? address : undefined,
    token: tokenAddress,
  })

  // Get the appropriate metadata based on the current chain
  const metadata = tokenMetadata[chainId]?.[asset]

  return {
    balance: data?.formatted,
    symbol: data?.symbol || metadata?.symbol,
    decimals: data?.decimals || metadata?.decimals,
    value: data?.value,
    isLoading,
    isError,
    refetch,
    isConnected,
  }
}
