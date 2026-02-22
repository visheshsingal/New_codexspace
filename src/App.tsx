import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { HomePage } from "./pages/HomePage";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { MobileMenu } from "./sections/MobileMenu";
import { useVisitTracker } from "./hooks/useVisitTracker";

// Component to handle global hooks inside Router
const AppContent = () => {
  useVisitTracker();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-switzer">
      <Routes>
        <Route path="/" element={<HomePage onMenuClick={() => setIsMenuOpen(true)} />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};
