import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoadingFallback from '../components/common/LoadingSpinner';
import ProtectedRoute from './ProtectedRoute';

// Lazy-loaded so the initial bundle only ships the Home page; other
// routes are fetched on demand (smaller first paint, faster load).
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const AdminLoginPage = lazy(() => import('../pages/AdminLoginPage'));

const AppRoutes = () => (
  <Suspense fallback={<PageLoadingFallback />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Suspense>
);

export default AppRoutes;
