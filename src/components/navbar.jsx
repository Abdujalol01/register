import { Link, useNavigate } from "react-router-dom"
import {logo} from "../constants/index"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/persintage-storage"
import { logoutUser } from "../slice/auth"
const Navbar = () => {
  const dispatch = useDispatch()
  const {loggedIn , user} = useSelector((state)=> state.auth)
  const navigate = useNavigate()
  const logout = ()=>{
    removeItem("Token")
    navigate("/login")
    dispatch(logoutUser())
  }
  return (
    <div className="d-flex  pt-3 flex-column flex-md-row align-items-center pb-3 mb-4">
    <Link
      to="/"
      className="d-flex align-items-center link-body-emphasis text-decoration-none"
    >
      <img src={logo} alt="logo" />
    </Link>

    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
          <p className="m-0 me-3 py-2 link-body-emphasis">{user.username}</p>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
          
          </>
        ) : (
          <>
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="py-2 link-body-emphasis text-decoration-none"
            to={"/register"}
          >
            Register
          </Link>
        </>
        )}
        
    </nav>
  </div>
  )
}

export default Navbar