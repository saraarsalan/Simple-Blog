import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navs = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <ul className="navbar-nav ">
          <li className="nav-item " id="youthinkNav">
            <Link to="/">
              <img
                style={{ height: "50px", width: "130px" }}
                src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </li>

          <li className="nav-item d-flex justify-content-center">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item d-flex justify-content-center">
            <NavLink className="nav-link" to="/Blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navs;
