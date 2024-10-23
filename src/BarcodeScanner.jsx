// BarcodeScanner.jsx
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const BarcodeScanner = () => {
    const [data, setData] = useState('No result');

    const handleScan = (data) => {
        if (data) {
            setData(data);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <div>
            <h2>Barcode Scanner</h2>
            <QrScanner
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{data}</p>
        </div>
    );
};

export default BarcodeScanner;
