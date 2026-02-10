import { useWallet } from '@solana/wallet-adapter-react';
import { useSolanaBalance } from '../hooks/useSolanaBalance';
import { BalanceCard } from './BalanceCard';

export function SolanaBalance() {
  const { connected } = useWallet();
  const { balance, loading, error } = useSolanaBalance();

  return (
    <BalanceCard title="Solana Balance" headerColor="bg-purple-600" connected={connected} loading={loading} error={error}>
      <p className="text-3xl font-bold text-gray-800">
        {balance?.toFixed(4)} <span className="text-purple-600">SOL</span>
      </p>
    </BalanceCard>
  );
}
