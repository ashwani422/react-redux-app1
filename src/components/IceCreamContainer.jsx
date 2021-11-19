import { useSelector, useDispatch } from "react-redux"
import { buyIceCream } from "../redux/actions/iceCreamActions"

function IceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div className="text-center">
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy an IceCream</button>
    </div>
  )
}

export default IceCreamContainer


