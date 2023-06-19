import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";

function Header() {
  const [activeItem, setActiveItem] = useState("start");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const navigate = useNavigate();
  const employee = () => {
    navigate("/employee");
  };
  const home = () => {
    navigate("/home");
  };
  const roaster = () => {
    navigate("/roaster");
  };
  const lohn = () => {
    navigate("/lohn");
  };
  const report = () => {
    navigate("/report");
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <div className="navbar-brand" href="/">
            <img
              src="assets/logo-img.png"
              alt="not found"
              className="img-fluid"
              width={120}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                    // onClick={() => handleItemClick('start')}
                  >
                    Start
                  </a>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/roaster"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Roster
                  </a>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Another action
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider dark"/></li> */}
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/employee"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Employee
                  </a>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Another action
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider dark"/></li> */}
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/report"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Another action
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider dark"/></li> */}
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/lohn"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lohn
                  </a>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Another action
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider dark"/></li> */}
                  <li>
                    <a className="dropdown-item dark" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* 
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                to=""
                >
                  <a className="nav-link" aria-current="page">
                    Ideas
                  </a>
                </NavLink>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex ">
                  <HiOutlineClock
                    color="white"
                    className="mt-2"
                    size={"25px"}
                  />{" "}
                  &nbsp;
                  <a className="nav-link" aria-current="page" href="/">
                    {/* <img src="Assets/clock.svg" alt="clock" className='img-fluid' width={"25px"} style={{fill:"7128558"}} /> &nbsp; */}
                    28 trial days left
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Help
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Another action
                      </a>
                    </li>
                    {/* <li><hr className="dropdown-divider dark"/></li> */}
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IoMdMail size={"20px"} />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Another action
                      </a>
                    </li>
                    {/* <li><hr className="dropdown-divider dark"/></li> */}
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hassan
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item " href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dark" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
