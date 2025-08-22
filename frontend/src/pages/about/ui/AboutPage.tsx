import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h2>About Doyclopedia</h2>
      <p>This is the about page with main layout.</p>
      <div className="content">
        <h3>Our Mission</h3>
        <p>We aim to provide comprehensive information and resources.</p>
        <h3>Features</h3>
        <ul>
          <li>FSD Architecture</li>
          <li>Redux State Management</li>
          <li>Context API Integration</li>
          <li>Responsive Design</li>
          <li>Nginx Prefix Support</li>
        </ul>
      </div>
    </div>
  );
};