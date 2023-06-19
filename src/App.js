import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Login from "./Components/Element/login/Login";
import Signup from "./Components/Element/Signup/Signup";
import Employee from "./Pages/Employee";
import Lohn from "./Pages/Lohn";
import EmployeePersonalGroup from "./Pages/EmployeePersonalGroup";
import Roaster from "./Pages/Roaster";
import Report from "./Pages/Report";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Base>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employeegroup" element={<EmployeePersonalGroup />} />
            <Route path="/roaster" element={<Roaster />} />
            <Route path="/lohn" element={<Lohn />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
