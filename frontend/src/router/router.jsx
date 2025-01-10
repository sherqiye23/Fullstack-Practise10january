import AddPage from "../pages/Add Page";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import UserLayout from "../pages/UserLayout";


const ROUTES = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "favorites",
                element: <Favorites />
            },
            {
                path: "add",
                element: <AddPage />
            },
            {
                path: "detail/:id",
                element: <Detail/>
            },
        ]
    }
]

export default ROUTES