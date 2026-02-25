import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* You can add a Global Navbar here if needed */}
        
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Future routes can be added here, e.g.:
              <Route path="/dashboard" element={<Dashboard />} /> 
          */}
        </Routes>

        {/* You can add a Global Footer here */}
      </div>
    </Router>
  );
}

export default App;