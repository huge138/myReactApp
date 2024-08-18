import { useDispatch, useSelector} from 'react-redux'
import { Dispatch} from '@reduxjs/toolkit'
import { setAdd, setSub } from "@/store/slice"
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import React,{ useEffect, useRef, useState } from 'react'

//静态资源导入、样式表
import ServiceZhengpin from '@/assets/img/index/service-zhengpin.png'
import ServiceShandian from '@/assets/img/index/service-shandian.png'
import ServiceShouhou from '@/assets/img/index/service-shouhou.png'
import logo from '@/assets/img/yougou.png'
import style from './style.module.scss'

// const IndexHeaderComponent: React.FC = () :JSX.Element => {

//     //获取仓库数据源
//     const count1:number = useSelector((state: any) => state.add.value)
//     const count2:number = useSelector((state: any) => state.sub.value)
//     //获取修改仓库数据的工具
//     const dispatch: Dispatch = useDispatch()

//     return(
//         <div>
//             <h1>首页标头分栏</h1>
//             <h2>一号计算结果：{count1}</h2>
//             <hr></hr>
//             <h2>二号计算结果：{count2}</h2>
//             <button onClick={() => dispatch(setAdd({value:1}))}>+1</button>
//             <button onClick={() => dispatch(setAdd({value:5}))}>+5</button>
//             <button onClick={() => dispatch(setSub({value:3}))}>-3</button>
//         </div>
//     )
// }

const IndexHeaderHooks: any = ():any => {
    //装载图片
    const serviceList:any[] = [
        {img: ServiceZhengpin, ch: '正品保障', en: 'Genuine'},
        {img: ServiceShandian, ch: '闪电送货', en: 'Speedy'},
        {img: ServiceShouhou, ch: '安心售后', en: 'AfterSale '}
    ]

    const navigate:NavigateFunction = useNavigate()
    const location:Location = useLocation()
    const [keyword, setKeyword] = useState<string>('')
    //搜索框功能
    useEffect(()=>{(location.pathname != '/list')? setKeyword('') : null},[location])
    const search = () => {navigate('/list',{state: {keyword: keyword}})}

    return { keyword, setKeyword, serviceList, search}

    // return {serviceList}

}

const IndexHeaderComponent: React.FC = () : JSX.Element =>{

    const { keyword, setKeyword, serviceList, search } = IndexHeaderHooks
    // const { serviceList } = IndexHeaderHooks

    //绘制服务项列表
    //map属性，无法获取
    const ServiceListView = serviceList.map((item:any,index:number):JSX.Element => {
        return(
            <div key={index} className={style.serviceCard}>
                <div>
                    <img src={item.img} alt=''/>
                </div>
                <div className={style.serviceCardTitle}>
                    <div><span>{item.ch}</span></div>
                    <div><span className={style.serviceEnglish}>{item.en}</span></div>
                </div>
            </div>
        )
    }) 
    
    return (
        <div className={style.main}>
            {/* 图标和搜索框 */}
            <div className={style.logoAndSearch}>
                <div className={style.logo}><img src={logo} alt="" /></div>
            </div>
            {/* 服务卡片列表 */}
            <div className={style.service}>{ServiceListView}</div>
        </div>
    )
}

export default IndexHeaderComponent