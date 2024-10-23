import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';
import BarcodeScanner from './BarcodeScanner';

const App = () => {
    return (
        <div>
            <BarcodeGenerator />
            <BarcodeScanner />
        </div>
    );
};

export default App;
