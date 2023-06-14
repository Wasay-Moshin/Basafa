import React from "react";

function PersonalGroupNav() {
  return (
    <div className="personalgroup">
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-md-6">
            <h4>The personnel group</h4>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end gap-4">
              <button className="btn-restore">Restore staff group</button>
              <button className="btn-emp">create staff group</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default PersonalGroupNav;
