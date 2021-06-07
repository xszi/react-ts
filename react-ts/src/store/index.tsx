import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { UserState } from './reducers/user'

export interface StoreState {
    user: UserState
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store