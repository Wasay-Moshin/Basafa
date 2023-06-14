import React, { useState } from "react";
import { BsSortDownAlt } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdTableRows } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";

function RoasterMenu() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <div className="roastermenu p-2 pt-3">
      <div className="p-2">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            employee &nbsp;
          </button>
          <button type="button" class="btn btn-outline-primary">
            The group
          </button>
          <button type="button" class="btn btn-outline-primary">
            positions &nbsp;
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p>manage employee</p>
        <p>
          <BsSortDownAlt size={12} />
          &nbsp; sort
        </p>
      </div>
      <div className="menubody">
        <div>
          <span>Offene Schicht </span>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div
            className={`hover-div ${isHovered1 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered1 && (
                <span
                  className=""
                  type=""
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <AiFillEdit size={20} />
                </span>
              )}
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button> */}
                  <div>
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                      Edit Dashboard
                    </h5>
                  </div>
                </div>

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
              &nbsp;&nbsp;
              {isHovered1 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered1 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr/>
          <div
            className={`hover-div ${isHovered2 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered2 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
          <div
            className={`hover-div ${isHovered2 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered2 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
          <div
            className={`hover-div ${isHovered2 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered2 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default RoasterMenu;
