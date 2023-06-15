import React from "react";

function Hero() {
  return (
    <div className="lohnhero">
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-md-9">
            <div className="card">
              <div>
                <h4 className="p-2">Lohndatenintervall</h4>
                <hr />
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Zahlungsperioden*
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">Offene Schicht</option>
                  </select>
                  <p>
                    Wählen Sie die Zahlungsperiode aus, für die Daten exportiert
                    werden sollen.
                  </p>
                </div>
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Datumsbereich*
                  </label>
                  <div className="d-flex">
                    <input type="date" className="form-control" />
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox" />
                <label> Gehalt basierend auf dem Datumsbereich berechnen</label>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox" />
                <label>
                  Datumsbereich ignorieren und Gehalt nur für einen Zeitraum
                  vollständig bezahlen
                </label>
              </div>
              <p className="pt-3">
                Wählen Sie aus, wie Festgehälter im Export angezeigt werden
                sollen, wenn der Datumsbereich nicht mit dem angegebenen
                Zeitraum übereinstimmt.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-9">
            <div className="card">
              <div>
                <h4 className="p-2">Mitarbeiter auswählen</h4>
                <hr />
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Abteilungen*
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">Alles</option>
                  </select>
                  <p>
                    Es werden nur Arbeitsstunden exportiert, die in den
                    ausgewählten Abteilungen geleistet wurden.
                  </p>
                </div>
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Mitarbeitertypen*
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">Alles</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label>Mitarbeiter </label>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label htmlFor="vehicle1">Alle Mitarbeiter</label>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox" />
                <label>Benutzerdefinierte Auswahl der Mitarbeiter</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-9">
            <div className="card">
              <div>
                <h4 className="p-2">Erweiterte Export-Optionen</h4>
                <hr />
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Schichten nach Status filtern
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">
                      Schichten, die für die Lohnabrechnung genehmigt wurden
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Exportdatei sortieren nach
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">Mitarbeitername</option>
                  </select>
                </div>
                <div class="form-group text-start ">
                  <label className="mb-2" for="dropdownInput">
                    Dateiformat*
                  </label>
                  <select className="form-control" id="dropdownInput">
                    <option value="option1">CSV (Semikolon getrennt)</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label>In die Exportdatei übernehmen</label>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox"  />
                <label htmlFor="vehicle1">Festgehälter Ihrer Mitarbeiter</label>
              </div>
              <div className="d-flex mt-3 gap-1">
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label htmlFor="vehicle1">
                  Vorschau der exportierten Datei als separate Datei
                </label>
              </div>
              <div class="form-group text-start ">
                <label className="mb-2" for="dropdownInput">
                  Vorschauformat
                </label>
                <select className="form-control" id="dropdownInput">
                  <option value="option1">Vorschau als PDF exportieren</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
