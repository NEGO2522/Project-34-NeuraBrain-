import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import MemoryMaps from './pages/MemoryMaps';
import Profile from './pages/Profile';
import Login from './auth/Login';
import Connect from './components/ConnectUs';
import PrivacyPolicy from './components/Privacy_Policy';
import TermsOfService from './components/TermsOfService';

// Helper component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-[#050505] min-h-screen selection:bg-orange-500 selection:text-black">
        <Routes>
          {/* Main Entry */}
          <Route path="/" element={<Landing />} />
          
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          
          {/* Core App Sections */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/memory-maps" element={<MemoryMaps />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Communication & Legal */}
          <Route path="/connect" element={<Connect />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />

          {/* Fallback route - Redirects to Landing if page not found */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;