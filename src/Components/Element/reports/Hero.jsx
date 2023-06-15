import React from "react";

function Hero() {
  return (
    <div className="reporthero">
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-md-2 ">
            <p>Statistiktyp</p>
          </div>
          <div className="col-md-3">
            <div class="form-group text-start ">
              <select className="form-control" id="dropdownInput">
                <option value="option1">Stunden pro Mitarbeiter</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-2 ">
            <span>MITARBEITER</span>
          </div>
          <div className="col-md-3 mt-5">
            <div class="form-group text-start ">
              <select className="form-control" id="dropdownInput">
                <option value="option1">Mitarbeiter</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <span>ZEITRAUM</span>

          <div className="col-md-2 pt-2">
            <div>
              <p>Ab Datum</p>
            </div>
          </div>
          <div className="col-md-2 pt-2">
            <div class="form-group text-start ">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-2 ">
            <div>
              <p>Bis Datum</p>
            </div>
          </div>
          <div className="col-md-2">
            <div class="form-group text-start ">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-2">
            <p>Ist ein Arbeitstag</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex mt-3 gap-4">
              <div>
                <input type="checkbox" />
                <label>Montag</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Dienstag	</label>
              </div>{" "}
              <div>
                <input type="checkbox" />
                <label>Mittwoch</label>
              </div>{" "}
              <div>
                <input type="checkbox" />
                <label>Donnerstag</label>
              </div>{" "}
              <div>
                <input type="checkbox" />
                <label>Freitag	</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Samstag</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
