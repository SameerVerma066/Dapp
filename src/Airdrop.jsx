import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import "./Airdrop.css"
import { useEffect, useState } from "react";

export function Airdrop() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(0);
    useEffect(() => {
    if (wallet.publicKey) {
        getBalance();
    }
}, [wallet.publicKey])

    async function sendAirdroptoUser() {
        const amount = document.getElementById("airdropAmount").value;
        
        if (!wallet.publicKey) {
            alert("Please connect your wallet first!");
            return;
        }
        
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount!");
            return;
        }
        
        try {
            await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
            alert(`Successfully airdropped ${amount} SOL!`);
        } catch (error) {
            alert("Airdrop failed. Please try again.");
            console.error(error);
        }
    }
    async function getBalance(){
        if(wallet.publickey){
            const amount = await connection.getBalance(wallet.publicKey);
            const balanceInSOL = amount / 1000000000;
            setBalance(balanceInSOL);
        }
    }


    return (
        <div className="airdrop-container">
            <div className="airdrop-header">
                <h2 className="airdrop-title">💰 Request Airdrop</h2>
                <p className="airdrop-subtitle">Get devnet SOL tokens for testing</p>
            </div>
            
            <div className="airdrop-form">
                <div className="input-group">
                    <label htmlFor="airdropAmount" className="input-label">Amount (SOL)</label>
                    <input 
                        id="airdropAmount" 
                        type="number" 
                        placeholder="Enter amount " 
                        className="airdrop-input"
                        min="0.1"
                        max="5"
                        step="0.1"
                    />
                </div>
                
                <button onClick={sendAirdroptoUser} className="airdrop-button">
                    Request Airdrop
                </button>
                
                <button onClick={getBalance} className="balance-button">
                    Get Balance
                </button>
            </div>
            
            {balance >= 0 && (
                <div className="balance-display">
                    <div className="balance-label">Your Balance</div>
                    <div>
                        <span className="balance-amount">{balance.toFixed(4)}</span>
                        <span className="balance-currency">SOL</span>
                    </div>
                </div>
            )}
            
            <div className="airdrop-info">
                <div className="airdrop-info-title">ℹ️ Note:</div>
                This is devnet SOL and has no real value. Maximum 5 SOL per request.
            </div>
        </div>
    )
}