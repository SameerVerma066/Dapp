import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
    
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from "./Airdrop"
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css';

function App() {
  
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/7n4oFun6tvvi2IgrySCa3Xsnvbbtmwu4"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div className="app-container">
                    <header className="app-header">
                      <div className="app-logo">⚡ Solana dApp</div>
                      <div className="wallet-buttons">
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                      </div>
                    </header>
                    
                    <main className="main-content">
                      <section className="hero-section">
                        <h1 className="hero-title">Welcome to Solana Devnet</h1>
                        <p className="hero-subtitle">
                          Connect your wallet and start exploring the Solana blockchain
                        </p>
                      </section>
                      
                      <Airdrop />
                    </main>
                  </div>
                </WalletModalProvider>
            </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
