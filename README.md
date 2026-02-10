# MultiWall

A multi-chain wallet dashboard built for **study purposes** — exploring how to integrate multiple blockchain ecosystems (Solana and Ethereum) into a single React application.

> **Disclaimer:** This project is a learning exercise. It is not intended for production use or managing real funds. Use at your own risk.

## What it does

- **Solana integration** — connect via Phantom, view SOL balance, toggle between mainnet and devnet
- **Ethereum integration** — connect via MetaMask (injected wallet), view ETH balance
- **Multi-chain UI** — side-by-side wallet connections and balance cards in a responsive layout

## What you can learn from this

- Setting up **Solana Wallet Adapter** (`@solana/wallet-adapter-react`) with dynamic RPC endpoints
- Setting up **wagmi + viem** for Ethereum wallet connection and balance queries
- Managing network switching — React context for Solana, wagmi's built-in chain state for Ethereum
- Structuring a multi-chain app with shared UI patterns (`BalanceCard`, `WalletCard`)
- Provider composition — nesting `QueryClientProvider`, Solana providers, and `WagmiProvider`

## Tech stack

| Layer | Library |
|-------|---------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Solana | `@solana/wallet-adapter-react`, `@solana/web3.js` |
| Ethereum | wagmi 3, viem 2 |
| Styling | Tailwind CSS 4 |
| Data fetching | TanStack React Query 5 |

## Getting started

```bash
# Install dependencies
npm install

# Copy env file and add your Helius API key (for Solana mainnet RPC)
cp .env.example .env

# Start dev server
npm run dev
```

## Project structure

```
src/
├── main.tsx                          # Provider hierarchy + wagmi/Solana config
├── App.tsx                           # Layout with toggles, wallets, and balances
├── components/
│   ├── WalletConnect.tsx             # Solana + Ethereum connect buttons
│   ├── SolanaBalance.tsx             # SOL balance display
│   ├── EthereumBalance.tsx           # ETH balance display
│   ├── SolanaNetworkToggle.tsx       # Mainnet/Devnet switcher
│   ├── BalanceCard.tsx               # Shared balance card component
│   └── WalletCard.tsx                # Shared wallet card component
├── contexts/
│   └── SolanaNetworkContext.tsx       # Network state for Solana
└── utils/
    └── address.ts                    # Address truncation helper
```

## License

MIT
