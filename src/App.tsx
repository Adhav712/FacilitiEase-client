import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { MobileHeader } from './components/layout/MobileHeader';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { Dashboard } from './pages/dashboard/Dashboard';
import { CategoryPage } from './pages/categories/CategoryPage';
import { IncubatorDetail } from './pages/incubator/IncubatorDetail';
import { PrivateRoute } from './components/auth/PrivateRoute';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: ':category',
        element: <CategoryPage />,
      },
      {
        path: 'incubator/:id',
        element: <IncubatorDetail />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
