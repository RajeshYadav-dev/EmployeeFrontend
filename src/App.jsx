import "./App.css";
import { useEffect, useState } from "react";
import EmployeeCrud from "./components/EmployeeCrud";
import api from "./components/axiosConfig";

function App() {
  const [employeer, setEmployeer] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/all");
    setEmployeer(result.data);
  }

  return (
    <div>
      <h1 className="text-center">List Of Employee</h1>
      <EmployeeCrud load={load} employeer={employeer} />
    </div>
  );
}

export default App;
