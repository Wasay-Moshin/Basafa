import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { RxDotsVertical } from "react-icons/rx";
function RoasterNav() {
  return (
    <div className="roasternav">
      <div className="container-fluid ">
        <div className="row p-2">
          <div className="col-md-6">
            <div className="d-flex gap-2">
              <div className="btn-group">
                <button
                  type="button"
                  class="btn-today dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Week
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button className=" btn-today">Today</button>
              </div>
              <div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">
                    <BiLeftArrowAlt size={20} />
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    5.june - 11.june
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <BiRightArrowAlt size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end gap-2">
              <div className="pt-1">
                <RxDotsVertical  size={20} color="rgb(121, 137, 154)"/>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  class="btn-today dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Templates
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <div className="btn-group">
                <button
                  type="button"
                  class="btn-today dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button className=" btn-today">Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoasterNav;
