import { useState } from "react"
// import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux/actions/cakeActions"


function CakeContainer() {

  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  const [number, setNumber] = useState(1)

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
    </div>
  )
}

export default CakeContainer

