import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileHeader } from './components/layout/MobileHeader';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PrivateRoute } from './components/auth/PrivateRoute';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <div className="flex flex-col lg:flex-row min-h-screen">
                  <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />
                  <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                  <div className="flex-1">
                    <Dashboard />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;