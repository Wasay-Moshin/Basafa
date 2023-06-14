import React, { useState } from "react";
import { TbEyeFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import data from "../../Utils/data.json";
import data1 from "../../Utils/data1.json";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

function Comparisontable() {
  // const [isHovered, setIsHovered] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div className="comparison-bg">
      <MDBContainer className="container-fluid pt-1">
        <MDBTable
          responsive
          striped
          className=" text-successtable-border border-light"
        >
          <MDBTableHead className=" text-center">
            <tr>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Monday, June 5th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((item) => (
              <tr className="text-center">
                {data1.map((i) => (
                  <td>
                    <button
                      type="button"
                      //  className={` hover-button ${isHovered ? "hovered" : ""}`}
                      // onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className=" button1"
                    >
                      <BsFillPlusCircleFill className="plus" size={"20px"} />
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="d-flex gap-3">
                              <div>
                                <img src="assets/user.png" alt="" width={80} />
                              </div>
                              <div className="text-start pt-3">
                                <p className="">ERSTELLEN OFFENE SCHICHT</p>
                                <h1>Montag, 5. Juni 2023</h1>
                              </div>
                            </div>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div className="text-start">
                              <label className="mb-2">Zeit</label>
                              <div className="d-flex">
                                <input type="text" className="form-control" />
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div class="form-group text-start mt-2">
                              <label className="mb-2" for="dropdownInput">
                                Schichtart
                              </label>
                              <select className="form-control" id="dropdownInput">
                                <option value="option1">Normal</option>
                              </select>
                            </div>
                            <div class="form-group text-start mt-2">
                              <label className="mb-2" for="dropdownInput">
                                Schichtart
                              </label>
                              <select className="form-control" id="dropdownInput">
                                <option value="option1">Offene Schicht</option>
                              </select>
                            </div>

                            {/* <div class="form-group">
      <label for="dropdownInput">Select an option:</label>
      <select class="form-control" id="dropdownInput">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div> */}
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Interrupt
                            </button>
                            <button type="button" class="btn " disabled>
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
            {/* <tr className="text-center">
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>  
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td> 
              <td>
                <button type="button" className={` hover-button ${isHovered ? "hovered" : " "}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {isHovered ? (
                  <BsFillPlusCircleFill color="#199BD7" size={"30px"} />
                ) : (
                  " "
                )} 
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td> 
            </tr>
            <tr className="text-center">
              
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
              <td>
                <BsFillPlusCircleFill
                  className="mt-2"
                  color="#199BD7"
                  size={"25px"}
                />
              </td>
            </tr> */}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
}

export default Comparisontable;
