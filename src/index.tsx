// import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import '@/index.scss'
import Store from '@/store/index'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <Provider store={Store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
 </Provider>
)
