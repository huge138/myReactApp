//创建具体切片
import { createSlice } from '@reduxjs/toolkit'

//定义初始化状态
import { AddCompute,SubCompute } from '@/interface/user/index'

const add:AddCompute = {value:0};
// interface AddCompute {
//     computeId? : number,
//     value? : number
// }
const sub:SubCompute = {value:0};

//创建切片
const slice = createSlice({
    name: 'counter',
    initialState: { add, sub },
    reducers: {
        setAdd: (state, action:{payload:AddCompute}) => {state.add.value += action.payload.value},
        setSub: (state, action:{payload:AddCompute}) => {state.sub.value -= action.payload.value}
    }
})

//导出动作
export const { setAdd, setSub } = slice.actions
//导出处理器
export default slice.reducer