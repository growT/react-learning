 export const ADD_CAR ="ADD_CAR";
 export function addCar(car) {
    return {
        type: ADD_CAR,
        payload: {
            car: car
        }
    }
}

export const DELETE_CAR ="DELETE_CAR";
export function deleteCar(carId) {
    return {
        type: DELETE_CAR,
        payload: {
            carId: carId
        }
    }
}

export const UPDATE_CAR ="UPDATE_CAR";
export function updateCar(carId,newCar) {
    return {
        type: UPDATE_CAR,
        payload: {
            carId: carId,
            newCar: newCar
        }
    }

}

export const SEARCH_CAR ="SEARCH_CAR";
export function searchCars(carId) {
    return {
        type: SEARCH_CAR,
        payload: {
            carId: carId,
        }
    }
}
