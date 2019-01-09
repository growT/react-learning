import carReducer from './carReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

const todoApp = combineReducers({
    carList: carReducer,
    userInfo: userReducer
})
//结合之后返回的对象相当于state中的结构，因为reducer就是更新后的state,所以key为state中的key
export default todoApp