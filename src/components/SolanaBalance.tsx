import { useWallet } from '@solana/wallet-adapter-react';
import { useSolanaBalance } from '../hooks/useSolanaBalance';
import { useSolanaNetwork } from '../contexts/SolanaNetworkContext';
import { BalanceCard } from './BalanceCard';

export function SolanaBalance() {
  const { connected } = useWallet();
  const { balance, loading, error } = useSolanaBalance();
  const { network } = useSolanaNetwork();

  const title = network === 'devnet' ? 'Solana Balance (devnet)' : 'Solana Balance';

  return (
    <BalanceCard title={title} headerColor="bg-purple-600" connected={connected} loading={loading} error={error}>
      <p className="text-3xl font-bold text-gray-800">
        {balance?.toFixed(4)} <span className="text-purple-600">SOL</span>
      </p>
    </BalanceCard>
  );
}
