import React from 'react';
import ScrollToTop from './components/common/ScrollToTop';
import CustomCursor from './components/layout/CustomCursor';
import ErrorBoundary from './components/common/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ScrollToTop />
        <CustomCursor />
        <AppRoutes />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
