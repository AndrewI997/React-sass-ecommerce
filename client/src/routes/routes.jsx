import AboutePage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage'
import { ADMIN_ROUTE, HOME_ROUTE, ITEMS_ROUTE, ABOUT_ROUTER } from '../consts/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage />
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <HomePage />
    },
    {
        path: ITEMS_ROUTE,
        element: <ProductPage />
    },
    {
        path: ABOUT_ROUTER,
        element: <AboutePage />
    }
]