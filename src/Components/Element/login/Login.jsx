import React from "react";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card px-5 py-3 ">
              <div className="login">
                <div>
                  <div className="text-center">
                    <img src="assets/logo-img.png" alt="" />
                    <p className="mt-3">automotive part elm</p>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Username (your email)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label pass-lab"
                    >
                      Password
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <BiHide color="#145CB8" />
                        ) : (
                          <BiShow color="#145CB8" />
                        )}
                      </button>
                    </label>
                    <div className="input-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <Link to={"/home"}>
                      <button type="submit" className="btn btn-primary">
                        Log in
                      </button>
                    </Link>
                  </div>
                  <div className="text-center ">
                    <hr />
                    <label>New to automotive part elm </label>
                    <br />
                    <Link to={"/signup"}>
                      <button type="button" className="btn btn-link">
                        Create an Account
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

export default Login;
