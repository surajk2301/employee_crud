import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import EmployeeProfile from "./Pages/EmployeeProfile";
import Login from "./Pages/Login";
import Welcome from "./pages/Welcome";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="https://jbk-mini-project.onrender.com/" element={<Welcome />}></Route>
        <Route path="https://jbk-mini-project.onrender.com/login" element={<Login/>}></Route>
        <Route path="https://jbk-mini-project.onrender.com/register" element={<Register/>}></Route>

        <Route path="https://jbk-mini-project.onrender.com/dashboard" element={<Dashboard/>}></Route>

        <Route path="https://jbk-mini-project.onrender.com/employee-profile/:id" element={<EmployeeProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
