import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import "./GetBalance.css";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function GetBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (wallet.publicKey) {
            getBalance();
        }
    }, [wallet.publicKey]);

    async function getBalance() {
        if (wallet.publicKey) {       
            const amount = await connection.getBalance(wallet.publicKey);
            setBalance(amount / LAMPORTS_PER_SOL);
        }
    }

    return (
        <div>
            <button onClick={getBalance} className="balance-button">
                Get Balance
            </button>

            {balance >= 0 && (
                <div className="balance-display">
                    <div className="balance-label">Your Balance</div>
                    <div>
                        <span className="balance-amount">{balance.toFixed(4)}</span>
                        <span className="balance-currency">SOL</span>
                    </div>
                </div>
            )}
        </div>
    );
}