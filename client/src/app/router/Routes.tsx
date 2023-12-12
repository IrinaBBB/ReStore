import { createBrowserRouter, Navigate } from "react-router-dom";
import App from '../layout/App'
import HomePage from '../../features/home/HomePage'
import Catalog from '../../features/catalog/Catalog'
import ProductsDetails from '../../features/catalog/ProductsDetails'
import AboutPage from '../../features/about/AboutPage'
import ContactPage from '../../features/contact/ContactPage'
import ServerError from '../errors/ServerError'
import NotFound from '../errors/NotFound'
import { BasketPage } from "../../features/basket/BasketPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'catalog/:id', element: <ProductsDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'basket', element: <BasketPage /> },
            { path: 'server-error', element: <ServerError /> },
            { path: 'not-found', element: <NotFound /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ],
    },
])
