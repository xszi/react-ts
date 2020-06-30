import React from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../../components/header'
// import Layout, { Fixed, Main } from './style'
import Layout, { Fixed } from './style'

const BaseLayout = () => {
    return (
        <Layout>
            <Fixed>
                <Header logo={require('../../assets/logo.svg')}></Header>
            </Fixed>
        </Layout>
    )
}

export default React.memo(BaseLayout)