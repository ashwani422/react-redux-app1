import { combineReducers } from "redux"
import { cakeReducer } from "./reducers/cakeReducer"
import { iceCreamReducer } from "./reducers/iceCreameReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

export default rootReducer