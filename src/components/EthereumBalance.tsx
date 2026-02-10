import { useConnection, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { BalanceCard } from './BalanceCard';

export function EthereumBalance() {
  const { isConnected, address } = useConnection();
  const { data: balance, isLoading, isError } = useBalance({ address });

  return (
    <BalanceCard title="Ethereum Balance" headerColor="bg-blue-600" connected={isConnected} loading={isLoading} error={isError ? 'Error loading balance' : null}>
      <p className="text-3xl font-bold text-gray-800">
        {parseFloat(balance?.value ? formatEther(balance.value) : '0').toFixed(4)}{' '}
        <span className="text-blue-600">ETH</span>
      </p>
    </BalanceCard>
  );
}
