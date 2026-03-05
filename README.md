# Solana Decentralized App

A decentralized application built with React and Solana blockchain, enabling users to interact with the Solana devnet for wallet management, airdrops, and token operations.

## Tech Stack

- **Frontend**: React + Vite
- **Blockchain**: Solana (Devnet)
- **Wallet Integration**: Solana Wallet Adapter
- **RPC Provider**: Alchemy

## Features Implemented ✅

- **Wallet Connection**: Users can connect their Solana wallet to the application
- **Wallet Disconnection**: Users can disconnect their wallet seamlessly
- **SOL Airdrop**: Request SOL airdrops on devnet through Alchemy RPC endpoint

## Features To Be Added 🚧

- **Send SOL**: Transfer SOL to other wallet addresses
- **Sign a Message**: Cryptographically sign messages with connected wallet
- **Show User Balance**: Display current SOL balance
- **Token Balance**: View SPL token balances
- **Transfer Tokens**: Send SPL tokens to other addresses

## Getting Started

### Prerequisites

- Node.js installed on your system
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── Airdrop.jsx      # Airdrop functionality component
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── assets/          # Static assets
```

## Contributing

Feel free to submit issues and enhancement requests!
