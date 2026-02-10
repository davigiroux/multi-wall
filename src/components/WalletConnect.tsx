import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useConnect, useDisconnect } from 'wagmi';
import { truncateAddress } from '../utils/address';
import { WalletCard } from './WalletCard';

function EthConnectButton() {
  const { address, isConnected } = useConnection();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {truncateAddress(address)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
    >
      Connect Ethereum
    </button>
  );
}

export function WalletConnect() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <WalletCard label="Solana" iconLetter="S" iconColor="bg-purple-100" textColor="text-purple-600">
        <WalletMultiButton />
      </WalletCard>

      <WalletCard label="Ethereum" iconLetter="E" iconColor="bg-blue-100" textColor="text-blue-600">
        <EthConnectButton />
      </WalletCard>
    </div>
  );
}
