import React from "react";

function VacationNav() {
  return (
    <div className="VacationNav">
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-md-8">
            <h4>Urlaub-Krankenstand</h4>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-end gap-2 ">
              <button type="button">Alles sehen</button>
              <button type="button">Krankenstand</button>
              <button type="button">Urlaub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacationNav;
