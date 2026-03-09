import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import "./SendTokens.css";


export function SendTokens(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;

        if (!wallet.publicKey) {
            alert("Please connect your wallet first!");
            return;
        }

        if (!to || !amount || amount <= 0) {
            alert("Please enter a valid recipient and amount!");
            return;
        }

        try {
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            }));
            await wallet.sendTransaction(transaction, connection);
            alert("Sent " + amount + " SOL to " + to);
        } catch (error) {
            alert("Transaction failed. Please try again.");
            console.error(error);
        }
    }

    return (
        <div className="send-container">
            <div className="send-header">
                <h2 className="send-title">Send SOL</h2>
                <p className="send-subtitle">Transfer SOL to any wallet address</p>
            </div>

            <div className="send-form">
                <div className="input-group">
                    <label htmlFor="to" className="input-label">Recipient Address</label>
                    <input id="to" type="text" placeholder="Enter wallet address" className="send-input" />
                </div>

                <div className="input-group">
                    <label htmlFor="amount" className="input-label">Amount (SOL)</label>
                    <input id="amount" type="number" placeholder="Enter amount" className="send-input" min="0.000001" step="0.001" />
                </div>

                <button onClick={sendTokens} className="send-button">
                    Send SOL
                </button>
            </div>
        </div>
    );
}