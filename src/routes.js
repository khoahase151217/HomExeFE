import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import Users from './pages/Users';
import PersonalPage from './pages/PersonalPage';
import Calendar from './pages/Calendar';
import Admin from './pages/Admin';
import CreatePT from './pages/CreatePT';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import PTDetails from './pages/PTDetails';
import Payment from './pages/Payment';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: 'app', element: <DashboardApp /> },
                { path: 'user', element: <User /> },
                { path: 'products', element: <Products /> },
                { path: 'blog', element: <Blog /> },
                {
                    path: 'personalPage',
                    element: <PersonalPage />
                },
            ],
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
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '/', element: <Navigate to="/login" /> },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
        {
            path: '/product/:id',
            element: <PTDetails />,
        },
        {
            path: '/payment',
            element: <Payment />,
        },
        {
            path: '/admin',
            element: <Admin />,
        },
        {
            path: '/createPT',
            element: <CreatePT />,
        },
        {
            path: '/users',
            element: <Users />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
}
