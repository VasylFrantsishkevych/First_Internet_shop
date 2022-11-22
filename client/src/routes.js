import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils";
import {AdminPage, AuthPage, BasketPage, DevicePage, ShopPage} from "./pages";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage/>
    },
    {
        path: BASKET_ROUTE,
        element: <BasketPage/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <ShopPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <AuthPage/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthPage/>
    }
]