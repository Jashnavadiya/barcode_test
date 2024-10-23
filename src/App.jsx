import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';
import BarcodeScanner from './BarcodeScanner';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
    return (


<Router>
<Routes>
  <Route path="/" element={<BarcodeGenerator />} />
  <Route path="/scanner" element={<BarcodeScanner />} />
</Routes>
</Router>
    );
};

export default App;
