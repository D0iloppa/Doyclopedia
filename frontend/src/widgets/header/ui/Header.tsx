import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../app/providers/ThemeProvider';
import { useAppDispatch } from '../../../app/store';
import { toggleTheme } from '../../../features/theme/model/themeSlice';

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Doyclopedia</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <button onClick={handleThemeToggle} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};