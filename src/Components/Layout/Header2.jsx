import React from "react";

function Header2() {
  return (
    <div className="header2">
      <div className="container-fluid pt-3">
        <div className="content">
          <div>
            <h4>automotive part elm</h4>
          </div>
          <div>
            <button
              className="btn btn-outline-secondary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Edit Dashboard
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Edit Dashboard
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <hr />
              <div className="offcanvas-body p-4">
                <h6 className="pb-2">Widgets</h6>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Beginning
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Acccount
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Pending Actions
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    news
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    events
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    birthday
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    labor cost share
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Sales volume
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    presence
                  </label>
                </div>
              </div>
              <div className="p-3">
                <hr />
                <button
                  type="button"
                  class="align-self-end btn btn-block btn-outline-dark"
                >
                  Interrupt
                </button>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  class="align-self-end btn btn-lg btn-block btn-primary"
                >
                  save on computer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header2;
