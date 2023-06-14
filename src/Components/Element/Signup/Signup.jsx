import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card px-5 py-3 ">
              <div>
                <div>
                  <div className="text-center">
                    <img src="assets/logo-img.png" alt="" />
                    <p className="mt-2">automotive part elm</p>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label ">
                      Full Name
                    </label>
                    <input name="name" type="name" className="form-control" />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Contact
                    </label>
                    <input
                      name="contact"
                      type="text"
                      className="form-control"
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputPassword" className="form-label">
                      {" "}
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="checkPassword"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <Link to={"/home"}>
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                    </Link>
                  </div>
                  <hr />
                  <div className="text-center">
                    <p>Already on automotive part elm</p>
                    <Link to="/">
                      <button type="button" className="btn btn-link">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
