import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }

    const isInputEmpty = input.trim() === '';

    return (
        <div className='container'>
            <h1>QR Code Generator</h1>
            <div className='qr-code'>
                <QRCode
                    id="qr-code"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
            <div className='input-container'>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value here"
                />
                <button
                    className={`input-container-button ${isInputEmpty ? 'disabled' : 'enabled'}`}
                    disabled={isInputEmpty}
                    onClick={handleGenerateQrCode}
                >
                    Generate QR Code
                </button>
            </div>
        </div>
    )
}