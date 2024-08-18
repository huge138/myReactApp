import { RouteObject } from "react-router-dom";
//导入页面
import Index from "@/pages/index/index"
import Home from '@/pages/index/home/home'
const routes: Array<RouteObject> = [
    //首页
    {
        path: '/*',
        element : <Index />,
        children:[
            {path: '*', element:<Home/>}
        ]
    }
    
]

export default routes;