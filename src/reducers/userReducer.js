import {
  GET_USERS
} from "../actions/useActions";
import { defaultData } from "../initState/initData";
export default function userReducer(state=defaultData.userInfo, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        status: action.payload.status,
        userList: action.payload.userList
      }
    }
    default: {
      return state;
    }
  }
}
