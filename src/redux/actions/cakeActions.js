import { BUY_CAKE } from "../constants/actionTypes"

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}