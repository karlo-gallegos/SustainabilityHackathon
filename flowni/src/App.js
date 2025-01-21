import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WaterStats from './pages/WaterStats';
import CommunityActions from './pages/CommunityActions';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import GetInvolvedHero from './pages/GetInvolved';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water-stats" element={<WaterStats />} />
          <Route path="/get-involved" element={<GetInvolvedHero />} />
          <Route path="/community-actions" element={<CommunityActions />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
