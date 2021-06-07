import moment from 'moment'
import { isPlainObject } from 'lodash'
import { USER } from '../constants'
import { LOCAL_STORAGE } from '@/constants'
import { Dispatch } from 'redux'

const { LOGIN } = USER

export function setUser(userInfo: any = {}) {
    if (userInfo.createdAt) {
        userInfo.createdAt = moment(userInfo.createdAt).format('YYYY-MM-DD')
    }

    return {
        type: LOGIN,
        userInfo: userInfo
    }
}

export function validateLocalStatus() {
    let userInfo = {}
    try {
        userInfo = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE.USER) as string)
        if (!isPlainObject(userInfo)) {
            userInfo = {}
        }
    } catch {}
    return setUser(userInfo)
}

