//相关依赖
import React,{ useEffect, useRef, useState} from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
//静态资源、自定应页面组件
import SecKillEmpty from '@/assets/img/empty/sec-kill-empty.png'
import ProductEmpty from '@/assets/img/empty/product-empty.png'
import CouponsEmpty from '@/assets/img/empty/coupons-empty.png'
import TitleCircle from '@/assets/img/common/title-circle.png'
import IndexBanner from '@/components/page-banner/PageBanner'
//样式表、枚举类、泛型、网络接口
import style from './style.module.scss'
import { BannerTypeEnum } from '@/enums'
import { Banner } from '@/interface/platform/index'
import { getBannerListApi } from '@/api/platform/platform-api'


const HomeHooks: any = ():any => {
    const navigate: NavigateFunction = useNavigate()
    const [bannerList, setBannerList] = useState<Array<Banner>>([])

    //内部方法定义
    useEffect(() =>{
        //获取轮播图列表
        getBannerListApi(BannerTypeEnum.PC, 'home').then((res) =>{
            setBannerList(res.data)
        }).catch((err: any) => {
            console.log(err)
        })
    })

    return { navigate, bannerList }
}


//定义页面元素
const HomePage: React.FC = (): JSX.Element => {

    const {  bannerList } = HomeHooks()

    return (
        <div>
            <h1>YouGou</h1>
            <div className={style.banner}>
                <div style={{width:'100%'}}>
                    <IndexBanner bannerList={bannerList}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage

