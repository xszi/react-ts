import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { DispatchProp, connect } from 'react-redux'
import PrivateRoute from '@/components/private-route'
import routesMap from './routes'
import CONFIG from '@/config'
// import { validateLocalStatus } from '@/store/actions/user'

const Routes: React.FC<DispatchProp> = function ({ dispatch }) {

    useEffect(() => {
        // dispatch(validateLocalStatus())
    }, []);

    return (
        <Router basename={CONFIG.baseURL}>
            <Switch>
                {routesMap.map((route, idx) => (
                    <PrivateRoute {...route} key={idx} />
                ))}
            </Switch>
        </Router>
    )
}

export default connect()(Routes)