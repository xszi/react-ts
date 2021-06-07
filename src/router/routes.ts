import { IRouteProps } from '@/router/types'
import { HOME } from './constants'
import TestPage from '@/views/todo/index'
import HocPage from '@/views/hoc/index'
import TicTacTocPage from '@/views/ticTacToe/index'

const routesMap: IRouteProps[] = [
    {
        path: HOME.TODO.path,
        exact: true,
        component: TestPage,
        meta: {
            // 当前页面是否需要登录状态
            requireAuth: false,
            // 网页标题
            title: HOME.TODO.name
        }
    },
    {
        path: HOME.HOC.path,
        exact: true,
        component: HocPage,
        meta: {
            // 当前页面是否需要登录状态
            requireAuth: false,
            // 网页标题
            title: HOME.HOC.name
        }
    },
    {
        path: HOME.TIC.path,
        exact: true,
        component: TicTacTocPage,
        meta: {
            // 当前页面是否需要登录状态
            requireAuth: false,
            // 网页标题
            title: HOME.TIC.name
        }
    }
]

export default routesMap
