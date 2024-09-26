import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We can't seem to find the page you're looking for.</p>
      <NavLink to="/" className="home-button">
        Go Back to Home
      </NavLink>
    </div>
  );
}

export default NotFoundPage;
