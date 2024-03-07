import axios from "axios";
import authHeader from "../auth/AuthService";
import appointment from "../../components/appointment/Appointment";

export const getAllAppointment = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/appointment/list?page=${page}&nameCustomer=${nameSearch}`,{headers:authHeader()})
        return rs.data;
    }catch (e){
        return undefined
    }
}

export const getAppointmentById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/appointment/details/${id}` ,{headers:authHeader()});
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

export const createAppointment = async (appointment) => {
    try {
        await axios.post("http://localhost:8080/api/appointment/create", appointment);
        return true;
    } catch (e){
        return false;
    }
}

