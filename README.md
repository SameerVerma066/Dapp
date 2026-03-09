# Solana Decentralized App

A decentralized application built with React and Solana blockchain, enabling users to interact with the Solana devnet for wallet management, airdrops, and token operations.

## Tech Stack

- **Frontend**: React + Vite
- **Blockchain**: Solana (Devnet)
- **Wallet Integration**: Solana Wallet Adapter
- **RPC Provider**: Alchemy

## Features Implemented ✅

- **Wallet Connection**: Connect any Solana wallet (Phantom, Solflare, etc.)
- **Wallet Disconnection**: Disconnect wallet seamlessly from the header
- **SOL Airdrop**: Request devnet SOL via Alchemy RPC — with input validation and balance auto-refresh on connect
- **Check Balance**: View current SOL balance, displayed inside the Airdrop card
- **Send SOL**: Transfer SOL to any wallet address with full input validation and error handling
- **Sign Message**: Cryptographically sign arbitrary messages using `ed25519`, with signature verified and displayed via `bs58` encoding

## UI & Styling ✅

- Dark-themed responsive layout with glassmorphism cards
- Solana brand gradient (green → purple) used across titles and buttons
- Three-column responsive grid (`Airdrop + Balance`, `Send SOL`, `Sign Message`) that stacks on mobile
- Individual CSS modules per component (`Airdrop.css`, `GetBalance.css`, `SendTokens.css`, `SignMessage.css`)

## Features To Be Added 🚧

- **Token Balance**: View SPL token balances
- **Transfer SPL Tokens**: Send SPL tokens to other addresses

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
