import { Link } from "react-router"
import { useContext } from "react"
import { authContext } from "../context/AuthContext"


function Navbar() {
  const {user, logout} = useContext(authContext)


  return (
    <div>
      <ul>
        <Link to="/"><li>Homepage</li></Link>

        {user && (

          <>
          <li>Welcome {user.username}</li>
          <Link to='/hoots'><li>Hoots</li></Link>
          <Link to='/hoots/create'><li>Create Hoot</li></Link>


          <button onClick={logout}>Logout</button>
          </>
        )}
        {!user && (
          <>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/signup'><li>Signup</li></Link>
          </>
        )}
        

      </ul>
    </div>
  )
}

export default Navbar
