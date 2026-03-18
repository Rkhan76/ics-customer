import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            Don't worry, even the best of us lose our way sometimes.
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              <Home size={18} style={{ marginRight: '10px' }} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .not-found-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 0;
          background: #fff;
        }

        .not-found-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .error-code {
          font-size: 150px;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 20px;
          opacity: 0.15;
          position: relative;
        }

        .not-found-content h1 {
          font-size: 48px;
          color: var(--secondary);
          margin-bottom: 20px;
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }

        .not-found-content p {
          color: var(--text-muted);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .not-found-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .error-code { font-size: 100px; }
          .not-found-content h1 { font-size: 32px; margin-top: -40px; }
          .not-found-content p { font-size: 16px; }
        }
      ` }} />
    </div>
  );
};

export default NotFound;
