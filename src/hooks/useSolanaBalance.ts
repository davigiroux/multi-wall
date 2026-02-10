import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useQuery } from '@tanstack/react-query';
import { useSolanaNetwork } from '../contexts/SolanaNetworkContext';

export function useSolanaBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const { network } = useSolanaNetwork();

  const { data: balance = null, isLoading: loading, isError } = useQuery({
    queryKey: ['solana-balance', network, publicKey?.toBase58()],
    queryFn: () =>
      connection.getBalance(publicKey!).then((lamports) => lamports / LAMPORTS_PER_SOL),
    enabled: !!publicKey,
  });

  return { balance, loading, error: isError ? 'Error loading balance' : null };
}
