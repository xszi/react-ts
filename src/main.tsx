import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
// Makes the Redux store available to the connect() calls in the component hierarchy below.
import { Provider } from 'react-redux'
import 'moment/locale/zh-cn'
import Routes from './router'
import store from '@/store'

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zh_CN}>
            <Routes />
        </ConfigProvider>
    </Provider>
    ,
    document.getElementById('root')
)
