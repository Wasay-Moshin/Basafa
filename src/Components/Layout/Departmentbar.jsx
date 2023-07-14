import React from "react";
// import { AiOutlineMenuFold } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Hero from "../Element/employee/Hero";

function Departmentbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baureihenkenntnisse, setBaureihenkenntnisse] = useState([""]);
  const [ortskenntnisse, setOrtskenntnisse] = useState([""]);
  const [certifications, setCertifications] = useState({
    RFU: "",
    Tauglichkeit: "",
    Simulator: "",
    Überwachungsfahrt: "",
    Sprachkurs: "",
    BahnCard: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [fields, setFields] = useState([]);


  const handleGermanNumber = (e) => {
    const inputPhoneNumber = e.target.value;
    const formattedPhoneNumber = inputPhoneNumber.replace(/[^\d+]/g, "");

    setInputValue(formattedPhoneNumber);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [psas, setPSAs] = useState([]);

  const handleAddPSA = () => {
    setPSAs([...psas, {}]);
  };

  const handleDeletePSA = (index) => {
    const updatedPSAs = [...psas];
    updatedPSAs.splice(index, 1);
    setPSAs(updatedPSAs);
  };

  const handleInputChange = (index, field, value) => {
    const updatedPSAs = [...psas];
    updatedPSAs[index][field] = value;
    setPSAs(updatedPSAs);
  };

  const handleDateChange = (event, certification) => {
    setCertifications({
      ...certifications,
      [certification]: event.target.value,
    });
  };

  const getExpirationStatus = (certification) => {
    const expirationDate = certifications[certification];

    if (!expirationDate) return null;

    const currentDate = new Date();
    const parsedExpirationDate = new Date(expirationDate);

    const daysUntilExpiration = Math.floor(
      (parsedExpirationDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilExpiration <= 0) {
      return "red";
    } else if (daysUntilExpiration <= 90) {
      return "orange";
    }
    return null;
  };

  const handleInputFiled = (index, field, event) => {
    if (field === "baureihenkenntnisse") {
      const updatedBaureihenkenntnisse = [...baureihenkenntnisse];
      updatedBaureihenkenntnisse[index] = event.target.value;
      setBaureihenkenntnisse(updatedBaureihenkenntnisse);
    } else if (field === "ortskenntnisse") {
      const updatedOrtskenntnisse = [...ortskenntnisse];
      updatedOrtskenntnisse[index] = event.target.value;
      setOrtskenntnisse(updatedOrtskenntnisse);
    }
  };

  const handleAddField = (field) => {
    if (field === "baureihenkenntnisse") {
      setBaureihenkenntnisse([...baureihenkenntnisse, ""]);
    } else if (field === "ortskenntnisse") {
      setOrtskenntnisse([...ortskenntnisse, ""]);
    }
  };

  const handleRemoveField = (index, field) => {
    if (field === "baureihenkenntnisse") {
      setBaureihenkenntnisse((prevBaureihenkenntnisse) =>
        prevBaureihenkenntnisse.filter((_, i) => i !== index)
      );
    } else if (field === "ortskenntnisse") {
      setOrtskenntnisse((prevOrtskenntnisse) =>
        prevOrtskenntnisse.filter((_, i) => i !== index)
      );
    }
  };

  const addField = () => {
    setFields([...fields, {}]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  return (
    <div className="departmentbar">
      <div className="container-fluid">
        <div className="all-dept pt-3">
          <div>
            <div className="d-flex gap-2">
              {/* <div className=""><AiOutlineMenuFold size={19} /></div> */}
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
                                {/* personal Data */}
                                <div className="card p-4">
                                  <div className="heading">
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
                                      <div class="form-group">
                                        <label className="form-label">
                                          Stadt
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          // id="inputAddress"
                                          placeholder="Stadt"
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
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Telefonnummer des Laufwerks
                                      </label>
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          value={inputValue}
                                          onChange={handleGermanNumber}
                                          className="form-control"
                                          placeholder="+4900000000"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Bank Detail */}
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
                                {/* Social Insurance */}
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
                                {/* Tax */}
                                <div className="card p-4 mt-4">
                                  <h4>Steuer</h4>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          Steuerklasse
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
                                          Kinderfreibetrag
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
                                {/* Skills and Certifications */}
                                <div className="card p-4 mt-4">
                                  <h4>
                                    Gültigkeit von Fähigkeiten und
                                    Zertifizierungen
                                  </h4>
                                  <p>
                                    Geben Sie das Ablaufdatum Ihrer
                                    Zertifizierung an
                                  </p>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          RFU (Regelmäßigefortbildung)
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "RFU"
                                          )}`}
                                          value={certifications.RFU}
                                          onChange={(event) =>
                                            handleDateChange(event, "RFU")
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          Tauglichkeit
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "Tauglichkeit"
                                          )}`}
                                          value={certifications.Tauglichkeit}
                                          onChange={(event) =>
                                            handleDateChange(
                                              event,
                                              "Tauglichkeit"
                                            )
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          Simulator
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "Simulator"
                                          )}`}
                                          value={certifications.Simulator}
                                          onChange={(event) =>
                                            handleDateChange(event, "Simulator")
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          Überwachungsfahrt:
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "Überwachungsfahrt"
                                          )}`}
                                          value={
                                            certifications.Überwachungsfahrt
                                          }
                                          onChange={(event) =>
                                            handleDateChange(
                                              event,
                                              "Überwachungsfahrt"
                                            )
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          Sprachkurs (Deutsch)
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "Sprachkurs"
                                          )}`}
                                          value={certifications.Sprachkurs}
                                          onChange={(event) =>
                                            handleDateChange(
                                              event,
                                              "Sprachkurs"
                                            )
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail"
                                          className="form-label"
                                        >
                                          BahnCard
                                        </label>
                                        <input
                                          type="date"
                                          className={`form-control ${getExpirationStatus(
                                            "BahnCard"
                                          )}`}
                                          value={certifications.BahnCard}
                                          onChange={(event) =>
                                            handleDateChange(event, "BahnCard")
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <h5>Baureihenkenntnisse</h5>
                                    <div>
                                      <div>
                                        {baureihenkenntnisse.map(
                                          (value, index) => (
                                            <div
                                              key={index}
                                              className="input-group"
                                            >
                                              <div className="col-md-4">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={value}
                                                  onChange={(event) =>
                                                    handleInputFiled(
                                                      index,
                                                      "baureihenkenntnisse",
                                                      event
                                                    )
                                                  }
                                                />
                                              </div>
                                              &nbsp; &nbsp; &nbsp; &nbsp;
                                              <div className="col-md-2">
                                                {index ===
                                                  baureihenkenntnisse.length -
                                                    1 && (
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                      handleRemoveField(
                                                        index,
                                                        "baureihenkenntnisse"
                                                      )
                                                    }
                                                  >
                                                    -
                                                  </button>
                                                )}
                                              </div>
                                            </div>
                                          )
                                        )}
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          onClick={() =>
                                            handleAddField(
                                              "baureihenkenntnisse"
                                            )
                                          }
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <h5>Ortskenntnisse</h5>

                                    <div>
                                      {ortskenntnisse.map((value, index) => (
                                        <div
                                          key={index}
                                          className="input-group"
                                        >
                                          <div className="col-md-4">
                                            <input
                                              type="text"
                                              className="form-control"
                                              value={value}
                                              onChange={(event) =>
                                                handleInputFiled(
                                                  index,
                                                  "ortskenntnisse",
                                                  event
                                                )
                                              }
                                            />
                                          </div>
                                          &nbsp; &nbsp; &nbsp; &nbsp;
                                          <div className="col-md-2">
                                            {index ===
                                              ortskenntnisse.length - 1 && (
                                              <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() =>
                                                  handleRemoveField(
                                                    index,
                                                    "ortskenntnisse"
                                                  )
                                                }
                                              >
                                                -
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                          handleAddField("ortskenntnisse")
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row mt-5">
                                    <h4>Zusatsbescheinigung</h4>
                                    <div className="col-md-6">
                                      <label htmlFor="" className="form-label">
                                        Freitextfeld
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="" className="form-label">
                                        Datum
                                      </label>
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                    </div>
                                    {fields.map((_, index) => (
                                      <div key={index} className="row">
                                        <div className="col-md-5">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Freitextfeld
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="col-md-5">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Datum
                                          </label>
                                          <input
                                            type="date"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="col-md-2 mt-3">
                                          <button className="btn btn-danger mt-3"
                                            onClick={() => removeField(index)}
                                          >
                                            -
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                    <div className="col-md-12">
                                      <button className="btn btn-primary" onClick={addField}>+</button>
                                    </div>
                                  </div>
                                </div>
                                {/* Equipments */}
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
                                          value={inputValue}
                                          onChange={handleGermanNumber}
                                          className="form-control"
                                          placeholder="+4900000000"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          PIN
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="PIN"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          PUK
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="PUK"
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
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          PIN
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="PIN"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <label
                                          for="exampleInputEmail"
                                          className="form-label "
                                        >
                                          PUK
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="PUK"
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
                                  <div className="row mt-3">
                                    <div className="col-md-3">
                                      <h6> DB21-Schlüssel </h6>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue
                                          id="flexCheckDefault"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="row ">
                                    <div className="col-md-3">
                                      <h6> Vierkant </h6>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue
                                          id="flexCheckDefault"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="row ">
                                    <div className="col-md-3">
                                      <h6> Kreuzbatschlüssel </h6>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue
                                          id="flexCheckDefault"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="mt-3">
                                    <button
                                      onClick={handleAddPSA}
                                      className="spe"
                                    >
                                      Add PSA
                                    </button>
                                    {psas.map((psa, index) => (
                                      <div key={index} className="row">
                                        {/* <h5>PSA</h5> */}
                                        <div className="mt-3"></div>
                                        <div className="col-md-6">
                                          <div>
                                            <label
                                              htmlFor="exampleInputText"
                                              className="form-label"
                                            >
                                              Freitextfeld (um Jacke usw. zu
                                              schreiben)
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              value={psa.text || ""}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  index,
                                                  "text",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div>
                                            <label
                                              htmlFor="exampleInputSize"
                                              className="form-label"
                                            >
                                              Größe
                                            </label>
                                            <input
                                              type="number"
                                              className="form-control"
                                              step="1"
                                              value={psa.size || ""}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  index,
                                                  "size",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div>
                                            <label
                                              htmlFor="exampleInputQuantity"
                                              className="form-label"
                                            >
                                              Anzahl der angegebenen Artikel
                                            </label>
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={psa.quantity || ""}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  index,
                                                  "quantity",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div>
                                            <label
                                              htmlFor="exampleInputDeliveryDate"
                                              className="form-label"
                                            >
                                              Liefertermin
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              value={psa.deliveryDate || ""}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  index,
                                                  "deliveryDate",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <button
                                            onClick={() =>
                                              handleDeletePSA(index)
                                            }
                                            className="btn btn-danger"
                                          >
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Sonstige
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                    <div className="col-md-12">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Jährliche Anmerkung
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                  {/* <div className="row mt-2">
                                    <div className="col-md-6">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                      >
                                        Sonstige
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div> */}
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
