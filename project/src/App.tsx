// project/src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TipsPage from './pages/TipsPage'; // Changed from SportPage
import BlogPage from './pages/BlogPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AllSportsPage from './pages/AllSportsPage'; // Keep AllSportsPage if you want a dedicated list of sports
// import PremiumPage from './pages/PremiumPage'; // Removed

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tips" element={<TipsPage />} /> {/* New Tips Route */}
            {/* Removed the /sports/:sportName route and SportPage import */}
            {/* You can still keep /sports to list all sports if needed, handled by AllSportsPage */}
            <Route path="/sports" element={<AllSportsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Removed PremiumPage route */}
            {/* <Route path="/premium" element={<PremiumPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
