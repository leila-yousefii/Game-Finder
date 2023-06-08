import { createBrowserRouter } from "react-router-dom";
import GameGrid from './Components/GameGrid';
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./Components/GameDetailPage";

const router=createBrowserRouter([
    {path:'/', element:<Layout/>,
children:[{index:true, element:<HomePage/>},
{path:'games/:id', element:<GameDetailPage/>}]
}
])

export default router