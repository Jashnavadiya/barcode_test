// BarcodeGenerator.jsx
import React, { useState } from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = () => {
    const [eventName, setEventName] = useState('');
    const [participantId, setParticipantId] = useState('');
    const [barcodeValue, setBarcodeValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine event name and participant ID to create a unique barcode value
        const value = `${eventName}-${participantId}`;
        setBarcodeValue(value);
    };

    return (
        <div>
            <h2>Generate Barcode</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Participant ID"
                    value={participantId}
                    onChange={(e) => setParticipantId(e.target.value)}
                    required
                />
                <button type="submit">Generate Barcode</button>
            </form>
            {barcodeValue && (
                <div>
                    <h3>Your Barcode:</h3>
                    <Barcode value={barcodeValue} />
                </div>
            )}
        </div>
    );
};

export default BarcodeGenerator;
