import { Link } from "react-router-dom";
import {logo} from "../constants"
const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top container">
      <div className="row">
        <div className="col-12 col-md">
          <img
            className="mb-2"
            src={logo}
            alt="logo"
            width="96"
            height="96"
          />
          <small className="d-block mb-3 text-body-secondary">
            © 2017–2023
          </small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Cool stuff
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Random feature
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Team feature
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Resource
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Resource name
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Another resource
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Final resource
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Team
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Locations
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Privacy
              </Link>
            </li>
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
