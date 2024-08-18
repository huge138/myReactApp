//依赖项导入
import React from 'react'
import { Carousel } from 'antd'

//导入接口规范、工具类、样式表、静态资源
import { Banner } from '@/interface/platform/index'
import { isEmpty } from '@/utils/index'
import style from './style.module.scss'
import BannerEmpty from '@/assets/img/empty/banner-empty.png'


//定义数据传递规范
interface Props {
    bannerList: Array<Banner>
}

const PageBannerComponent: React.FC<Props> = ({bannerList}): JSX.Element => {

    const transformBanner: Array<JSX.Element> = bannerList.map((item, index) =>{
        return (
            <div key = {index}>
                <img src={item.img} alt={item.description} 
                    style={{cursor: isEmpty(item.link)? 'default' : 'pointer'}}
                />
            </div>
        )
    })

    return (
        <Carousel autoplay dots dotPosition='bottom' className={style.banner}>
            {bannerList.length === 0? <img src={BannerEmpty} alt='' /> : transformBanner }
        </Carousel>
    )
}

export default PageBannerComponent;