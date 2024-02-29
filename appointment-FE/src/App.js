
import './App.css';

import HomePage from "./components/HomePage";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Login from "./components/login/Login";
import Appointment from "./components/appointment/Appointment";
import History from "./components/history/History";
import Specialty from "./components/specialty/Specialty";
import SearchSpecialty from "./components/search/SearchSpecialty";
import Doctor from "./components/doctor/Doctor";
import SearchDoctor from "./components/search/SearchDoctor";
import HeaderAdmin from "./components/header/HeaderAdmin";
import DetailSpecialty from "./components/specialty/DetailSpecialty";
import DetailDoctor from "./components/doctor/DetailDoctor";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/doctor/detail/:id" element={<DetailDoctor/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/specialty" element={<Specialty/>} />
            <Route path="/specialty/detail/:id" element={<DetailSpecialty/>}/>
            <Route path="/doctor" element={<Doctor/>} />
            <Route path="/search-specialty" element={<SearchSpecialty/>} />
            <Route path="/search-doctor" element={<SearchDoctor/>} />
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
