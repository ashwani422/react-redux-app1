import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../redux/actions/userActions"

export default function UsersContainer() {

  const userData = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="text-center">
      <h2>Users:</h2>
      {
        userData.loading ? <div>Loading...</div> : (
          userData.error ? <div>{userData.error}</div> : (
            userData.users && userData.users.map(user => <p>{user.name}</p>)
          )
        )
      }
    </div>
  )
}
