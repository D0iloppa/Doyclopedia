import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { MainLayout } from './shared/ui/layout/MainLayout';
import { HomePage } from './pages/home/ui/HomePage';
import { AboutPage } from './pages/about/ui/AboutPage';
import { ProfilePage } from './pages/profile/ui/ProfilePage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router basename="/doyclopedia-dev">
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;