import { WalletConnect } from './components/WalletConnect';
import { SolanaBalance } from './components/SolanaBalance';
import { EthereumBalance } from './components/EthereumBalance';
import { SolanaNetworkToggle } from './components/SolanaNetworkToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            MultiWall
          </h1>
          <p className="text-gray-600 mt-2">Multi-chain wallet dashboard</p>
          <div className="mt-4">
            <SolanaNetworkToggle />
          </div>
        </header>

        <WalletConnect />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SolanaBalance />
          <EthereumBalance />
        </div>
      </div>
    </div>
  );
}

export default App;
