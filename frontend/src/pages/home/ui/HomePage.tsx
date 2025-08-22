import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h2>Welcome to Doyclopedia</h2>
      <p>This is the home page with main layout.</p>
      <div className="content">
        <h3>Featured Content</h3>
        <p>Here you can see the main content of the application.</p>
        <p>URL Path: /doyclopedia-dev/</p>
      </div>
    </div>
  );
};