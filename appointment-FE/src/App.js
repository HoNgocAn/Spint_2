
import './App.css';

import HomePage from "./components/home/HomePage";
import {Route, Routes, useParams} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Appointment from "./components/appointment/Appointment";
import Specialty from "./components/specialty/Specialty";
import SearchSpecialty from "./components/search/SearchSpecialty";
import Doctor from "./components/doctor/Doctor";
import SearchDoctor from "./components/search/SearchDoctor";
import DetailSpecialty from "./components/specialty/DetailSpecialty";
import DetailDoctor from "./components/doctor/DetailDoctor";
import HomeAdmin from "./components/home/HomeAdmin";
import HomeDoctor from "./components/home/HomeDoctor";

import Dashboard from "./components/Dashboard";
import Error403 from "./components/auth/Error403";
import authToken from "./service/units/UserToken";
import {useEffect, useState} from "react";
import * as method from "./service/doctor/DoctorService";
import AppointmentList from "./components/appointment/AppointmentList";
import HomeCustomer from "./components/home/HomeCustomer";
import SearchAppointment from "./components/search/SearchAppointment";
import DetailAppointment from "./components/appointment/DetailAppointment";

function App() {

    let role;

    if (!authToken()){
        console.log("Error")
    }else {
        role = authToken().roles[0].authority;
    }

    console.log(role)

  return (
    <div>
        <Routes>
            {
                role == "ADMIN" ?
                    <>
                        <Route path="/home-admin" element={<HomeAdmin/>}/>
                        <Route path="/appointment" element={<AppointmentList/>}/>
                        <Route path="/appointment/:id/:date/:time" element={<Appointment/>} />
                        <Route path="/search-appointment" element={<SearchAppointment/>} />
                    </>
                    :
                        <Route path="/error" element={<Error403/>}/>

            }

            {
                role == "CUSTOMER" ?
                    <>
                        <Route path="/home-customer" element={<HomeCustomer/>} />
                        <Route path="/appointment/:id/:date/:time" element={<Appointment/>} />
                        <Route path="/search-appointment" element={<SearchAppointment/>} />
                    </>
                    :
                    <Route path="/error" element={<Error403/>}/>

            }

            {
                role == "DOCTOR" ?
                    <>
                        <Route path="/home-doctor" element={<HomeDoctor/>} />
                        <Route path="/appointment" element={<AppointmentList/>}/>
                        <Route path="/search-appointment" element={<SearchAppointment/>} />
                    </>
                    :
                    <Route path="/error" element={<Error403/>}/>

            }

            {
                role == "DOCTOR" || role == "CUSTOMER" || role == "ADMIN" ?
                    <>
                        <Route path="/appointment/:id" element={<Appointment/>}/>
                        <Route path="/appointment/detail/:id" element={<DetailAppointment/>}/>
                        <Route path="/appointment" element={<AppointmentList/>}/>
                        <Route path="/search-appointment" element={<SearchAppointment/>} />
                    </>
                    :
                    <Route path="/error" element={<Error403/>}/>

            }
            <Route path="/error" element={<Error403/>}/>
            <Route path="/" element={<HomePage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/doctor/detail/:id" element={<DetailDoctor/>}/>
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
