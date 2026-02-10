import { createContext, useContext, useState } from 'react';

export type SolanaNetwork = 'mainnet' | 'devnet';

interface SolanaNetworkContextValue {
  network: SolanaNetwork;
  setNetwork: (network: SolanaNetwork) => void;
}

const SolanaNetworkContext = createContext<SolanaNetworkContextValue | null>(null);

export function SolanaNetworkProvider({ children }: { children: React.ReactNode }) {
  const [network, setNetwork] = useState<SolanaNetwork>('mainnet');

  return (
    <SolanaNetworkContext.Provider value={{ network, setNetwork }}>
      {children}
    </SolanaNetworkContext.Provider>
  );
}

export function useSolanaNetwork() {
  const context = useContext(SolanaNetworkContext);
  if (!context) throw new Error('useSolanaNetwork must be used within SolanaNetworkProvider');
  return context;
}
