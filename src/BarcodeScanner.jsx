// BarcodeScanner.jsx
import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const BarcodeScanner = () => {
    const videoRef = useRef(null);
    const [result, setResult] = useState('No result');

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();
        codeReader
            .decodeFromVideoDevice(null, videoRef.current, (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    setResult(result.text);
                }
            });

        return () => {
            codeReader.reset();
        };
    }, []);

    return (
        <div>
            <h2>Scan Barcode</h2>
            <video ref={videoRef} style={{ width: '100%' }} />
            <p>{result}</p>
        </div>
    );
};

export default BarcodeScanner;
