// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { Navbar } from './components/layout/Navbar';
// import { Footer } from './components/layout/Footer';
// import { Sidebar } from './components/layout/Sidebar';
// import { MobileHeader } from './components/layout/MobileHeader';
// import { Home } from './pages/Home';
// import { Login } from './pages/auth/Login';
// import { Register } from './pages/auth/Register';
// import { ForgotPassword } from './pages/auth/ForgotPassword';
// import { Dashboard } from './pages/dashboard/Dashboard';
// import { CategoryPage } from './pages/categories/CategoryPage';
// import { IncubatorDetail } from './pages/incubator/IncubatorDetail';
// import { PrivateRoute } from './components/auth/PrivateRoute';
// import { TanstackWrapper } from './hooks/TanstackProvider';
// import { useAutoAnimate } from '@formkit/auto-animate/react';

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [animationParent] = useAutoAnimate();

//   return (
//     <div ref={animationParent} className="flex flex-col lg:flex-row min-h-screen">
//       <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const MainLayout = () => {
//   const [animationParent] = useAutoAnimate();
//   return (
//     <>
//       <Navbar />
//       <div ref={animationParent} className="min-h-screen">
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'register',
//         element: <Register />,
//       },
//       {
//         path: 'forgot-password',
//         element: <ForgotPassword />,
//       },
//       {
//         path: ':category',
//         element: <CategoryPage />,
//       },
//       {
//         path: 'incubator/:id',
//         element: <IncubatorDetail />,
//       },
//     ],
//   },
//   {
//     path: '/dashboard',
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <TanstackWrapper
//     children={
//       <RouterProvider router={router} />
//     }
//   />

// }

// export default App;



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
import { Bookings } from './pages/dashboard/Bookings';
import {MyProfile} from './pages/dashboard/MyProfile';
import { CategoryPage } from './pages/categories/CategoryPage';
import { IncubatorDetail } from './pages/incubator/IncubatorDetail';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { TanstackWrapper } from './hooks/TanstackProvider';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {StartupVirtualID}  from './pages/dashboard/StartupVirtualID';


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col lg:flex-row min-h-screen">
      <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

const MainLayout = () => {
  const [animationParent] = useAutoAnimate();
  return (
    <>
      <Navbar />
      <div ref={animationParent} className="min-h-screen">
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
      {
        path: 'bookings',
        element: <Bookings />,
      },
      {
        path: 'profile',
        element: <MyProfile />,
      },
      // In your routes configuration
      {
        path: '/dashboard/virtual-id',
        element: <StartupVirtualID />
      }
    ],
  },
]);

function App() {
  return (
    <TanstackWrapper children={<RouterProvider router={router} />} />
  );
}

export default App;
