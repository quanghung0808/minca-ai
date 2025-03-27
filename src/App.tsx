import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './constant/routes';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import { ToastProvider } from './context/ToastProvider';

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route element={<Dashboard />} />
            <Route element={<Layout />}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Route>
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
