import React from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../../components/header'
import Tabbar, { Tabber } from '../../components/tabbar'
// import Layout, { Fixed, Main } from './style'
import Layout, { Fixed } from './style'

const navList: Tabber[] = [
    { name: '全部', route: '/topic/all'},
    { name: '精华', route: '/topic/good'},
    { name: '分享', route: '/topic/share'},
    { name: '问答', route: '/topic/ask'},
    { name: '招聘', route: '/topic/job'},
    { name: '关于', route: '/about'},
]

const BaseLayout = () => {
    return (
        <Layout>
            <Fixed>
                <Header logo={require('../../assets/logo.svg')}></Header>
                <Tabbar value={navList}></Tabbar>
            </Fixed>
        </Layout>
    )
}

export default React.memo(BaseLayout)