import React from "react";

function EmployeeTable() {
  return (
    <div className="employee-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Employees</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">department access</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td" scope="row">
              Husnain Khaild
            </td>
            <td>Husnain </td>
            <td>khalid</td>
            <td>All department</td>
          </tr>
          <tr>
            <td scope="row">Amna Khan</td>
            <td>Amna</td>
            <td>khan</td>
            <td>All department</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
