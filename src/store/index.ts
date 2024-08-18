//定义仓库
import { configureStore } from "@reduxjs/toolkit";//引入configureStore引入仓库
import sliceInstance from './slice'

const store = configureStore({
    //数据处理逻辑
    reducer: sliceInstance
})

export default store;