import { useState } from "react";
import api from "./axiosConfig";
import EmployeeList from "./EmployeeList";

const CreateEmployee = ({ load, employeer }) => {
  /* state definition  */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await api.post("/create", {
      name: name,
      email: email,
      contact: contact,
    });
    alert("Saved");
    // reset state
    setId("");
    setName("");
    setEmail("");
    setContact("");
    load();
  }
  async function editEmployee(employee) {
    setName(employee.name);
    setEmail(employee.email);
    setPublished(employee.contact);
    setId(employee.id);
  }

  async function deleteEmployee(id) {
    await api.delete("/delete/" + id);
    alert("Employee Details Deleted Successfully");
    load();
  }

  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Employee Details No Found");
    await api.put("/update", {
      id: id,
      name: name,
      email: email,
      conatct: conatct,
    });
    alert("Employee Details Updated");
    // reset state
    setId("");
    setName("");
    setEmail("");
    setContact("");
    load();
  }
  /* end handlers */

  /* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            hidden
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label>Contact</label>
          <input
            type="text"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Register
          </button>
          <button className="btn btn-warning m-4" onClick={update}>
            Update
          </button>
        </div>
      </form>
      <EmployeeList
        employeer={employeer}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default CreateEmployee;
