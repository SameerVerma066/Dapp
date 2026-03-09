import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';
import './SignMessage.css';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert(`Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div className="sign-container">
            <div className="sign-header">
                <h2 className="sign-title">Sign Message</h2>
                <p className="sign-subtitle">Prove wallet ownership by signing a message</p>
            </div>

            <div className="sign-form">
                <div className="input-group">
                    <label htmlFor="message" className="input-label">Message</label>
                    <input id="message" type="text" placeholder="Enter message to sign" className="sign-input" />
                </div>

                <button onClick={onClick} className="sign-button">
                    Sign Message
                </button>
            </div>
        </div>
    );
};