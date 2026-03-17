import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* All other routes removed for corporate landing page */}
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Scroll to Top */}
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          scroll-behavior: smooth;
        }
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 45px;
          height: 45px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          font-size: 20px;
          box-shadow: var(--shadow-md);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .scroll-to-top:hover {
          background: var(--primary-hover);
          transform: translateY(-5px);
        }
      ` }} />
    </Router>
  );
}

export default App;
