import { combineReducers } from "redux"
import { cakeReducer } from "./reducers/cakeReducer"
import { iceCreamReducer } from "./reducers/iceCreameReducer"
import { usersReducer } from "./reducers/usersReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: usersReducer
})

export default rootReducer