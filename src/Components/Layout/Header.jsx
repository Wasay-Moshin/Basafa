import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
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
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                    // onClick={() => handleItemClick('start')}
                  >
                    Start
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/roaster"
                >
                  <a
                    className="nav-link"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Roster
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/employee"
                >
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Employee
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/report"
                >
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/lohn"
                >
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lohn
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/vacation"
                >
                  <a className="nav-link" href="#">
                    Urlaub / Krankenstand
                  </a>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    aria-expanded="false"
                  >
                    Help
                  </a>

                </li> */}
                {/* <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IoMdMail size={18} />
                  </a>

                </li> */}
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    aria-expanded="false"
                  >
                    <FaUserCircle size={20} />
                    &nbsp;&nbsp; Hassan
                  </a>
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
