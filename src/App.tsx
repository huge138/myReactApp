import { ConfigProvider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import  zhCN from 'antd/locale/zh_CN'
import AppScrollTop from './components/scroll-top'
import { useRoutes } from 'react-router-dom'
import routes from './router/routes'

const AppHock: any = ():any => {
  // const dispatch: Dispatch = useDispatch() 
  // const isLogin: boolean = useSelector((state: any) => state.isLogin)
  const transformRoutes: React.ReactElement | null = useRoutes(routes)

  // useEffect(() =>{
  //   if (isLogin){
  //     //获取用户信息
  //   }
  // },[ isLogin,dispatch])

  return {transformRoutes}
}

const App:React.FC = (): JSX.Element => {

  const {transformRoutes} = AppHock()

  return (
    <ConfigProvider locale={zhCN} theme={{token: {colorPrimary:'#f13a3a', borderRadius:0}}}>
        <AppScrollTop>{transformRoutes}</AppScrollTop>
    </ConfigProvider>
  )
}

export default App
