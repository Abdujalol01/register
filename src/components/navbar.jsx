import { Link } from "react-router-dom"
import {logo} from "../constants/index"
const Navbar = () => {
  return (
    <div className="d-flex  pt-3 flex-column flex-md-row align-items-center pb-3 mb-4">
    <Link
      to="/"
      className="d-flex align-items-center link-body-emphasis text-decoration-none"
    >
      <img src={logo} alt="logo" />
    </Link>

    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
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
    </nav>
  </div>
  )
}

export default Navbar