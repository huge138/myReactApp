import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { ResponseCodeEnum } from '@/enums'

export const baseUrl:string = import.meta.env.VITE_APP_BASE_URL

const request =(config: AxiosRequestConfig, auth: boolean = false ) : Promise<AxiosResponse> => {
    const instance: AxiosInstance = axios.create({
        baseURL : baseUrl,
        timeout : 5000
    })

    //请求拦截器
    instance.interceptors.request.use((config: InternalAxiosRequestConfig):any => {
        if (auth && !!localStorage.getItem('token')){
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
        return config
    })

    //响应拦截器
    instance.interceptors.response.use((res:AxiosResponse) :any => {
        if (res.data.code === ResponseCodeEnum.OK){
            return res.data;
        }else if(res.data.code === ResponseCodeEnum.UN_LOGIN_ERROR || res.data.code === ResponseCodeEnum.UN_LOGIN_ERROR){
            localStorage.removeItem('token')
            message.error(res.data.message).then()
            window.location.href = '/login'
        }else {
            message.error(res.data.message).then()
        }

    })
    
    return instance(config)
}

export default request