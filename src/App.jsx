import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Apne saare pages ko yahan import karein
import Home from './pages/Home';
// import PrivacyPolicy from './pages/PrivacyPolicy'; // Apne folder structure ke hisaab se path theek kar lena
// import TermsAndConditions from './pages/TermsAndConditions'; // Apne folder structure ke hisaab se path theek kar lena

function App() {
  return (
    <Router>
      {/* Navbar yahan laga sakte hain agar har page par dikhana ho */}
      {/* <Navbar /> */}

      <Routes>
        {/* Main Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Legal Pages Routes */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}

        {/* Agar koi aisi link par chala jaye jo exist nahi karti, uske liye 404 (optional) */}
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>

      {/* Footer yahan laga sakte hain taaki har page ke end me automatically aa jaye */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;