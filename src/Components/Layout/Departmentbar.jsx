import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Hero from "../Element/employee/Hero";

function Departmentbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="departmentbar">
      <div className="container-fluid">
        <div className="all-dept pt-3">
          <div>
            <div className="d-flex gap-2">
              <div className="">
                <AiOutlineMenuFold size={19} />
              </div>
              <h4>All departments</h4>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2">
              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </button>
                <ul className="dropdown-menu">...</ul>
              </div>

              <div className="btn-group">
                <div>
                  <button className="btn-emp" onClick={handleOpenModal}>
                    {" "}
                    <HiPlusCircle size={20} />
                    &nbsp;create-employee
                  </button>
                  {isModalOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <div className="modal-nav d-flex justify-content-between">
                          <div>
                            <h4>create employees</h4>
                          </div>
                          <div className="d-flex gap-4">
                            <button className="spe">Speichern</button>
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
                            <div className="row justify-content-center mt-4">
                              <div className="col-md-8">
                                <div className="card p-4">
                                  <h4>Persönliche Daten</h4>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Vorname
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Nachname
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="email-input mt-3">
                                    <label
                                      for="exampleInputEmail"
                                      className="form-label"
                                    >
                                      E-Mail-Adresse (Benutzername)*
                                    </label>
                                    <input
                                      name="email"
                                      type="email"
                                      className="form-control"
                                      id="exampleInputEmail"
                                      aria-describedby="emailHelp"
                                      autoComplete="off"
                                    />
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Landesvorwahl
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Handy
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-check mt-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="exampleCheckbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="exampleCheckbox"
                                    >
                                      Kontaktdaten teilen
                                    </label>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Persönliche Informationen</h4>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Soz.-Vers. Nr.
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Geschlecht
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Geburtstag
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card p-4">
                                  <h4>Kontaktdaten</h4>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Straße
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Postleitzahl
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Straße 2
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Stadt
                                        </label>
                                        <input
                                          name="fname"
                                          type="fname"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Lohn</h4>
                                  <hr />
                                  <div className="email-input mt-3">
                                    <label
                                      for="exampleInputEmail"
                                      className="form-label"
                                    >
                                      Datum des Arbeitsbeginns
                                    </label>
                                    <input
                                      name="email"
                                      type="email"
                                      className="form-control"
                                      id="exampleInputEmail"
                                      aria-describedby="emailHelp"
                                      autoComplete="off"
                                    />
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Abteilungen*</h4>
                                  <hr />
                                  <div className="d-flex justify-content-between">
                                    <p>
                                      Verwenden Sie Abteilungen, um Ihren
                                      Mitarbeiter in einem bestimmten Standort
                                      oder Bereich in Ihrem Unternehmen zu
                                      platzieren.
                                    </p>
                                    <button className="btn" disabled>
                                      Bearbeiten
                                    </button>
                                  </div>
                                  <hr />
                                  <div>
                                    <h6>Name</h6>
                                    <hr />
                                    <p>Email</p>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Personalgruppen</h4>
                                  <hr />
                                  <div className="d-flex justify-content-between">
                                    <p>
                                      Verwenden Sie Mitarbeitergruppen, um Ihren
                                      Mitarbeitern bestimmte Rollen zuzuweisen,
                                      die sie im Unternehmen übernehmen.
                                    </p>
                                    <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                    >
                                      Hinzufügen
                                    </button>
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
            </div>
          </div>
        </div>
      </div>
      <hr style={{ position: "relative", zIndex: "-1" }} />
      <Hero />
    </div>
  );
}

export default Departmentbar;
