import {
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR,
  SEARCH_CAR,
} from "../actions/carActions";
import { defaultData } from "../initState/initData";
export default function carReducer(state = defaultData.carList, action) {
  switch (action.type) {
    case ADD_CAR: {
      return [...state, action.payload.car];
  
    }
    case DELETE_CAR: {
      return state.filter(item => item.carId !== action.payload.carId);
    }
    case UPDATE_CAR: {
      return state.map(item => { 
            if(item.carId === action.payload.carId) {
               return action.payload.newCar
            }
            return item;
        })
    }
    case SEARCH_CAR: {
      return state.filter(item => item.carId === action.payload.carId);
     
    }
    default: {
      return state;
    }
  }
}
