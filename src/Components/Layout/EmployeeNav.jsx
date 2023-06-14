import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxRows } from "react-icons/rx";
function EmployeeNav() {
  return (
    <div>
      <div className="employee-nav">
        <div>
          <form class="d-flex" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="emp">
          <RxRows />
          <BsFillGrid3X3GapFill />

          <div>
            <button
              className="btn  btn-outline-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              employee
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex=""
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <div>
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Angezeigte Mitarbeiterfelder
                  </h5>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="p-2">
                <p>
                  Wählen Sie aus, welche Felder Sie in der Übersicht für Ihre
                  Mitarbeiter als Spalten anzeigen wollen.
                </p>
              </div>
              <hr />
              <div className="offcanvas-body p-4">
                <h6 className="pb-2">Standardfelder</h6>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Vorname
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Nachname
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Initialen
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Beiname
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Benutzername
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Email
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Handy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Telefon
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Postleitzahl
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                  Stadt
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                  Adresse
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                  Street2
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                    Postleitzahl
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exampleCheckbox"
                  />
                  <label className="form-check-label" for="exampleCheckbox">
                  Geburtstag
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
          <b>1-2 von 2</b>
        </div>
      </div>
    </div>
  );
}

export default EmployeeNav;
