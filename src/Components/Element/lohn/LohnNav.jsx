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
                <button className="btn">Bericht vorbereiten</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LohnNav;
