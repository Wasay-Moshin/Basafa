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

  const [inputs, setInputs] = useState([{ start: "", end: "" }]);

  const handleAdd = () => {
    setInputs([...inputs, { start: "", end: "" }]);
  };

  const handleRemove = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
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
                                          placeholder="Vorname"
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
                                          placeholder="Nachname"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="email-input">
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
                                          placeholder=" E-Mail-Adresse (Benutzername)*"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="password">
                                        <label
                                          for="exampleInputPassword"
                                          className="form-label"
                                        >
                                          Password*
                                        </label>
                                        <div
                                          className="input-group"
                                          id="how_hide_password"
                                        >
                                          <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                          />
                                          {/* <a href="javascript:;" class="input-group-text bg-transparent"><i className="fa fa-eye-slash"></i></a> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Ausstellungsdatum des medizinischen
                                        Tauglichkeitszeugnisses:
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Ablaufdatum des medizinischen
                                        Fitnesszertifikats:
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Geburtsdatum
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="date"
                                          className="form-control"
                                          placeholder="Geburtsdatum"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Telefonnummer des Laufwerks
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="contact"
                                          className="form-control"
                                          placeholder="+4900000000"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <label className="form-label">
                                        Start Bahnhof
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Geben Sie den Startbahnhof ein"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <label className="form-label">
                                        Endbahnhof
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Betreten Sie den Bahnhof End"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div style={{ marginTop: "30px" }}>
                                        <button
                                          className="btn btn-primary"
                                          onClick={handleAdd}
                                        >
                                          Weitere hinzufügen
                                        </button>
                                      </div>
                                    </div>
                                    {inputs.map((input, index) => (
                                      <div className="row" key={index}>
                                        <div className="col-md-4">
                                          <label className="form-label">
                                            Start Bahnhof
                                          </label>
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="start"
                                              value={input.start}
                                              onChange={(event) =>
                                                handleInputChange(index, event)
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <label className="form-label">
                                            Endbahnhof
                                          </label>
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="end"
                                              value={input.end}
                                              onChange={(event) =>
                                                handleInputChange(index, event)
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div style={{ marginTop: "30px" }}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                handleRemove(index)
                                              }
                                            >
                                              <RxCross2 />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label className="form-label">
                                          Straße
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="inputAddress"
                                          placeholder="Straße"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label
                                          for="inputAddress"
                                          className="form-label"
                                        >
                                          Hausnummer
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="inputAddress"
                                          placeholder="Hausnummer"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        for="inputZip"
                                        className="form-label"
                                      >
                                        PLZ
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                        placeholder="PLZ"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        for="inputCity"
                                        className="form-label"
                                      >
                                        Stadt
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputCity"
                                        placeholder=" Stadt"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        for="inputAddress"
                                        className="form-label"
                                      >
                                        Bundesland
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="Bundesland"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        for="inputAddress"
                                        className="form-label"
                                      >
                                        Land
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="Land"
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Werkzeuge (falls erforderlich)
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
                                  {/* <div className="row mt-3">
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
                                  </div> */}
                                  {/* <div className="form-check mt-3">
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
                                  </div> */}
                                </div>
                                {/* <div className="card p-4 mt-4">
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
                                </div> */}
                                {/* <div className="card p-4">
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
                                </div> */}
                                {/* <div className="card p-4 mt-4">
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
                                </div> */}
                                {/* <div className="card p-4 mt-4">
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
                                </div> */}
                                {/* <div className="card p-4 mt-4">
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
                                </div> */}
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
