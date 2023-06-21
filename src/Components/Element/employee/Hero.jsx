import React from "react";
import Menubar from "../../Layout/Menubar";
import EmployeeNav from "../../Layout/EmployeeNav";
import EmployeeTable from "./EmployeeTable";
function Hero() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-3">
            <Menubar />
          </div> */}
          <div className="col-md-12">
            <EmployeeNav />
            <div className="employee-table mt-4">
              <EmployeeTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
