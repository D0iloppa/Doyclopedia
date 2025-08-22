import React from 'react';
import { Header } from '../../../widgets/header/ui/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Doyclopedia. All rights reserved.</p>
      </footer>
    </div>
  );
};