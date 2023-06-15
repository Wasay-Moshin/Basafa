import React, { useState } from "react";
import { TbEyeFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import data from "../../Utils/data.json";
import data1 from "../../Utils/data1.json";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

function Comparisontable() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                    <div className="btn-group">
                      <div>
                        <button className="button1" onClick={handleOpenModal}>
                          {" "}
                          <BsFillPlusCircleFill
                            className="plus"
                            size={"20px"}
                          />
                        </button>
                        {isModalOpen && (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <div className="modal-nav d-flex justify-content-between">
                                <div className="d-flex gap-3">
                                  <div>
                                    <img
                                      src="assets/user.png"
                                      alt=""
                                      width={80}
                                    />
                                  </div>
                                  <div className="text-start pt-3">
                                    <p className="">ERSTELLEN OFFENE SCHICHT</p>
                                    <h1>Montag, 5. Juni 2023</h1>
                                  </div>
                                </div>
                                <div className="d-flex gap-4">
                                  <button
                                    className="cross-btn"
                                    onClick={handleCloseModal}
                                  >
                                    <RxCross2 />
                                  </button>
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-10">
                                      <div className="d-flex gap-5 mt-2">
                                        <div className="col-md-3">
                                          <div className="text-start">
                                            <label className="mb-2">Zeit</label>
                                            <div className="d-flex">
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                              &nbsp;
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-7">
                                          <div class="form-group text-start ">
                                            <label
                                              className="mb-2"
                                              for="dropdownInput"
                                            >
                                              Schichtart
                                            </label>
                                            <select
                                              className="form-control"
                                              id="dropdownInput"
                                            >
                                              <option value="option1">
                                                Normal
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="text-start mt-2">
                                        <div>
                                          <span className="text-start">
                                            pause
                                          </span>
                                        </div>
                                        <div className="mt-3">
                                          <span className="">0 m</span>
                                        </div>
                                        <hr className="mt-4" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-9">
                                      <div class="form-group text-start ">
                                        <label
                                          className="mb-2"
                                          for="dropdownInput"
                                        >
                                          Mitarbeiter
                                        </label>
                                        <select
                                          className="form-control"
                                          id="dropdownInput"
                                        >
                                          <option value="option1">
                                            Offene Schicht
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-md-9">
                                      <div class="form-group text-start ">
                                        <label
                                          className="mb-2"
                                          for="dropdownInput"
                                        >
                                          Gruppe oder Position
                                        </label>
                                        <select
                                          className="form-control"
                                          id="dropdownInput"
                                        >
                                          <option value="option1">
                                            Auswählen
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <nav>
                                        <div
                                          class="nav nav-tabs"
                                          id="nav-tab"
                                          role="tablist"
                                        >
                                          <button
                                            class="nav-link active"
                                            id="nav-home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-home"
                                            aria-selected="true"
                                          >
                                            Kommentar
                                          </button>
                                          <button
                                            class="nav-link"
                                            id="nav-profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                          >
                                            lohn
                                          </button>
                                          <button
                                            class="nav-link"
                                            id="nav-contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-contact"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-contact"
                                            aria-selected="false"
                                          >
                                            Schicht kopieren
                                          </button>
                                          <button
                                            class="nav-link"
                                            id="nav-contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-contact"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-contact"
                                            aria-selected="false"
                                          >
                                            Lohnzuschlag
                                          </button>
                                        </div>
                                      </nav>
                                      <div>
                                        <textarea
                                          className="text-area-field__text-area text-field--primary text-area-field__text-area--primary mt-2"
                                          name="text"
                                          id=""
                                          cols="30"
                                          rows="10"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="modal-footer p-2 ">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                  >
                                    Abbrechen
                                  </button>
                                  &nbsp;
                                  <button type="button" className="btn btn-outline-secondary" disabled>
                                  Erstellen
                                  </button>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
}

export default Comparisontable;
