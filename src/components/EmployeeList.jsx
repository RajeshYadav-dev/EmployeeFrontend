import React, { useState } from "react";

const EmployeeList = ({ employeer, editEmployee, deleteEmployee }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">SR.NO</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {employeer.map((emp, index) => {
        return (
          <tbody key={emp.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editEmployee(emp)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default EmployeeList;
