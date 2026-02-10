import { type SolanaNetwork, useSolanaNetwork } from '../contexts/SolanaNetworkContext';

const options: { value: SolanaNetwork; label: string }[] = [
  { value: 'mainnet', label: 'Mainnet' },
  { value: 'devnet', label: 'Devnet' },
];

export function SolanaNetworkToggle() {
  const { network, setNetwork } = useSolanaNetwork();

  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setNetwork(value)}
          className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
            network === value
              ? 'bg-purple-600 text-white'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
