import React, { useState } from "react";
import { TbEyeFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import data from "../../Utils/data.json";
import data1 from "../../Utils/data1.json";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
      <ReactTooltip
        anchorId="app-title"
        place="top"
        content="Hide the day so employee cant see the day shifts"
      />
      <ReactTooltip
        anchorId="second-app-title"
        place="top"
        content="Add a headline and comment to tag"
      />
      <MDBContainer className="container-fluid pt-1">
        <MDBTable
          responsive
          striped
          className=" text-successtable-border border-light"
        >
          <MDBTableHead className=" text-center">
            <tr>
              <th scope="col" className="monday">
                Monday, June 19th
                <br />
                <TbEyeFilled id="app-title" size={"15px"} />
                &nbsp; <FiEdit id="second-app-title" /> &nbsp; <br />0 Layer
                &nbsp;
              </th>
              <th scope="col" className="monday">
                Tuesday, June 20th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Wednesday, June 21th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Thrusday, June 22th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Friday, June 23th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Saturday, June 24th
                <br />
                <TbEyeFilled size={"15px"} /> &nbsp; <FiEdit /> &nbsp; <br />0
                Layer &nbsp;
              </th>
              <th scope="col" className="monday">
                Sunday, June 25th
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
                            size={"25px"}
                          />
                        </button>
                        {isModalOpen && (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <div className="modal-nav d-flex justify-content-between">
                                <div className="d-flex gap-2">
                                  <div>
                                    <img
                                      className="img-fluid mt-3"
                                      src="assets/user.png"
                                      alt=""
                                      width={60}
                                    />
                                  </div>
                                  <div className="text-start pt-3">
                                    <p className="">ERSTELLEN OFFENE SCHICHT</p>
                                    <h4>Montag, 5. Juni 2023</h4>
                                  </div>
                                </div>
                                <div className="d-flex gap-4">
                                  <button
                                    className="cross-btn"
                                    onClick={handleCloseModal}
                                  >
                                    <RxCross2 size={30} />
                                  </button>
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="container-fluid">
                                  <div className="row justify-content-center mt-4">
                                    <div className="col-md-10">
                                      <div className="card p-4 text-start">
                                        <h4>Schicht hinzufügen</h4>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <label
                                              for="exampleInputEmail"
                                              className="form-label "
                                            >
                                              Kunden
                                            </label>
                                            <select className="form-control">
                                              <option>Railway Station</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <label
                                              for="exampleInputEmail"
                                              className="form-label "
                                            >
                                              Treiber
                                            </label>
                                            <select className="form-control">
                                              <option>
                                                Wählen Sie Treiber
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-md-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Startdatum
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Endtermin
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Aus
                                            </label>
                                            <input
                                              type="time"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="col-md-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Zu
                                            </label>
                                            <input
                                              type="time"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="col-md-6">
                                            <label
                                              for="exampleInputEmail"
                                              className="form-label "
                                            >
                                              Zugstrecke
                                            </label>
                                            <select className="form-control">
                                              <option>Wähle eine Option</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <label
                                              for="exampleInputEmail"
                                              className="form-label "
                                            >
                                              Nächste Tage Shift Visisblity
                                            </label>
                                            <select className="form-control">
                                              <option>
                                                Wählen Sie Treiber
                                              </option>
                                              <option>1 Days</option>
                                              <option>2 Days</option>{" "}
                                              <option>3 Days</option>{" "}
                                              <option>4 Days</option>{" "}
                                              <option>5 Days</option>
                                              <option>6 Days</option>
                                              <option>7 Days</option>
                                              <option>8 Days</option>
                                              <option>9 Days</option>
                                              <option>10 Days</option>
                                            </select>
                                          </div>
                                          <div class="form-check form-switch">
                                            <input
                                              class="form-check-input"
                                              type="checkbox"
                                              id="flexSwitchCheckChecked"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="flexSwitchCheckChecked"
                                            >
                                              Mit Wochenendarbeit
                                            </label>
                                          </div>
                                          <div className="col-md-12">
                                            <label
                                              for="exampleFormControlTextarea1"
                                              class="form-label"
                                            >
                                              Comment
                                            </label>
                                            <textarea
                                              class="form-control"
                                              id="exampleFormControlTextarea1"
                                              rows="3"
                                            ></textarea>
                                          </div>
                                          <div className="d-flex gap-2">
                                            <button className="btn btn-primary">
                                              Speichern
                                            </button>
                                            <button className="btn btn-primary">
                                              Stornieren
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
