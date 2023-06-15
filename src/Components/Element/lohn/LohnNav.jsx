import React from "react";

function LohnNav() {
  return (
    <div className="lohnnav">
      <div className="container-fluid">
        <h3>Lohndatenexport</h3>
        <div className="d-flex justify-content-between">
          <div className="row">
            <div className="col-md-10">
              <p>
                Wählen Sie einen Datumsbereich und Mitarbeiter aus, um nur eine
                Untergruppe der Daten anzuzeigen. Beim Ausführen eines
                Lohndatenexports werden keine Daten erzeugt oder geändert, was
                bedeutet, dass er jederzeit ausgeführt werden kann.
              </p>
            </div>
            <div className="col-md-2">
              <div className="d-flex justify-content-end">
                {/* <button className="btn">Bericht vorbereiten</button> */}
                <div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Bericht vorbereiten
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            your wage report
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div className="card">
                            <h4 className="p-1">Overview</h4>
                            <hr />
                            <div className="d-flex justify-content-between p-2 rep">
                              <p>Report created for</p>
                              <p>4 employees</p>
                            </div>{" "}
                            <hr />
                            <div className="d-flex justify-content-between p-2 rep">
                              <p>Period</p>
                              <p>16.5. - 15.6.2023</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between p-2 rep">
                              <p>
                                Employees with no hours or wage data in the
                                selected period
                              </p>
                              <p>4 employees</p>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            cancel
                          </button>
                          <button type="button" className="btn btn-primary">
                            Download PDF
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
      </div>
    </div>
  );
}

export default LohnNav;
