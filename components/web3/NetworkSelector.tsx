'use client'

import { useChainId, useSwitchChain } from 'wagmi'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Network } from 'lucide-react'
import { baseSepolia, baseMainnet } from '@/app/config/base-networks'
import { seiTestnet } from '@/app/config/sei-testnet'

interface NetworkInfo {
  name: string
  icon: string
}

const NETWORKS: Record<number, NetworkInfo> = {
  [seiTestnet.id]: {
    name: 'SEI Testnet',
    icon: '🌊',
  },
  [baseSepolia.id]: {
    name: 'Base Sepolia',
    icon: '🔵',
  },
  [baseMainnet.id]: {
    name: 'Base',
    icon: '🔷',
  },
}

export function NetworkSelector() {
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  const currentNetwork = NETWORKS[chainId] || NETWORKS[seiTestnet.id]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Network className="h-4 w-4" />
          {currentNetwork.icon} {currentNetwork.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(NETWORKS).map(([id, network]) => (
          <DropdownMenuItem
            key={id}
            onClick={() => switchChain({ chainId: Number(id) })}
            className="gap-2"
          >
            {network.icon} {network.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 