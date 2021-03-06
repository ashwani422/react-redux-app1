// import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux/actions/cakeActions"

// ----------------------------------- Old fashion ------------------------------------
// function CakeContainer(props) {
//   return (
//     <div>
//       <h2>Number of Cakes - {props.numOfCakes}</h2>
//       <button onClick={props.buyCake}>Buy Cake</button>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     numOfCakes: state.numOfCakes
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: () => dispatch(buyCake())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// ---------------------------------------------------------------------------------------


function CakeContainer() {

  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div className="text-center">
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy a Cake</button>
    </div>
  )
}

export default CakeContainer

