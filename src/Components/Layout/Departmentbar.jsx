import React from "react";
// import { AiOutlineMenuFold } from "react-icons/ai";
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
              <div className="">{/* <AiOutlineMenuFold size={19} /> */}</div>
              <h4>Mitarbeiter</h4>
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
                                  <div className="heading">
                                    {/* <img
                                      src="assets/personal-data.png"
                                      alt=""
                                      width={33}
                                    /> */}

                                    <h4> Persönliche Daten</h4>
                                  </div>
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
                                      <div class="form-group">
                                        <label className="form-label">
                                          Straße
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          // id="inputAddress"
                                          placeholder="Straße"
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
                                      <div class="form-group">
                                        <label className="form-label">
                                          Geburtsort
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          // id="inputAddress"
                                          placeholder="Geburtsort"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Familienstand
                                      </label>
                                      <select
                                        class="form-select"
                                        name="marital_status"
                                        id="marital_status"
                                      >
                                        <option value="">Familienstand</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Separated">
                                          Separated
                                        </option>
                                        <option value="Divorced">
                                          Divorced
                                        </option>
                                      </select>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label className="form-label">
                                          Staatsangehörigkeit
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Staatsangehörigkeit"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label className="form-label">
                                          Konfession
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="konfession"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label className="form-label">
                                          Arbeitsbeginn
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Arbeitsbeginn"
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
                                    {/* <div className="col-md-6">
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
                                    </div> */}
                                    {/* <div className="col-md-6">
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
                                    </div> */}

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
                                    {/* <div className="col-md-4">
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
                                    </div> */}
                                    {/* <div className="col-md-4">
                                      <div style={{ marginTop: "30px" }}>
                                        <button
                                          className="btn btn-primary"
                                          onClick={handleAdd}
                                        >
                                          Weitere hinzufügen
                                        </button>
                                      </div>
                                    </div> */}
                                    {/* {inputs.map((input, index) => (
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
                                    ))} */}

                                    {/* <div className="col-md-6">
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
                                    </div> */}

                                    {/* <div className="col-md-6">
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
                                    </div> */}

                                    {/* <div className="col-md-6">
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
                                    </div> */}

                                    {/* <div className="col-md-6">
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
                                    </div> */}

                                    {/* <div className="col-md-12">
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
                                    </div> */}

                                    {/* <div className="d-flex gap-2">
                                      <button className="btn btn-primary">
                                        Speichern
                                      </button>
                                      <button className="btn btn-primary">
                                        Stornieren
                                      </button>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Bankverbindung</h4>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          kreditinstitute
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="kreditinstitute"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label"
                                        >
                                          IBAN
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="IBAN"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          BIC
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="BIC"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Sozialversicherung</h4>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Rentenversicherungsnummer
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Rentenversicherungsnummer"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Krankenkasse
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Krankenkasse"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Steuer</h4>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Steuerkiassc
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Steuerkiassc"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label"
                                        >
                                          Kinderferibetrage
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Kinderferibetrage"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Steuer ID Nummer
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Steuer ID Nummer"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card p-4 mt-4">
                                  <h4>Ausrüstung</h4>
                                  <div className="mt-3">
                                    <h5> Praktisch (Handy)</h5>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Datum der Übergabe an den Mitarbeiter
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label"
                                        >
                                          IMEA No
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="IMEA No"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          SIM-Karten-Nr
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="SIM-Karten-Nr"
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
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Name des Netzanbieters
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="contact"
                                          className="form-control"
                                          placeholder="Name des Netzanbieters"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Marke (Freitext)
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="mt-3">
                                      <h5>Tablette</h5>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Datum der Übergabe an den Mitarbeiter
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label"
                                        >
                                          IMEA No
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="IMEA No"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          SIM-Karten-Nr
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="SIM-Karten-Nr"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Name des Netzanbieters
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="contact"
                                          className="form-control"
                                          placeholder="Name des Netzanbieters"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Marke (Freitext)
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="d-flex gap-4 mt-3">
                                      <div>
                                        <h5> DB21-Schlüssel </h5>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue
                                          id="flexCheckDefault"
                                        />
                                      </div>
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
