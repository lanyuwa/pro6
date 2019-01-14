
import Home from "../components/home";
import Not404 from "../components/not404";
import ShopDetail from "../components/shopDetail";
import Classify from "../components/classify";
import ShopCart from "../components/ShopCart";
import My from "../components/my";

const routes = [
    {
        exact:true,
        path:"/",
        component:Home
    },
    {
        path:"/shopDetail/:id",
        component:ShopDetail
    },
    {
        path:"/classify",
        component:Classify
    },
    {
        path:"/shopCart",
        component:ShopCart
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"*",
        component:Not404
    }
];
export default routes;