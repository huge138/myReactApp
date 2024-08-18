import React from 'react'
// import { useLocation } from "react-router-dom"
import Style from './style.module.scss'
import IndexHeader from '@/components/index-header/IndexHeader'



const IndexPage: React.FC = (): JSX.Element => {
    // const location:Location = useLocation();

    return (
        <div className={Style.main}>
            <div className={Style.index}>
                <IndexHeader />
            </div>
        </div>
    )
}

export default IndexPage;