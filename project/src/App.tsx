// project/src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SportPage from './pages/SportPage';
import BlogPage from './pages/BlogPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage'; // New Import
import TermsPage from './pages/TermsPage'; // New Import
import PrivacyPage from './pages/PrivacyPage'; // New Import
import AllSportsPage from './pages/AllSportsPage'; // New Import
import PremiumPage from './pages/PremiumPage'; // Existing but ensuring it's here for links

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sports" element={<AllSportsPage />} /> {/* New Route */}
            <Route path="/sports/:sportName" element={<SportPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} /> {/* New Route */}
            <Route path="/terms" element={<TermsPage />} /> {/* New Route */}
            <Route path="/privacy" element={<PrivacyPage />} /> {/* New Route */}
            <Route path="/premium" element={<PremiumPage />} /> {/* Existing but good to list explicitly */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
