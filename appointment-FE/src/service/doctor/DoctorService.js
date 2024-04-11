import axios from "axios";
import authHeader from "../auth/AuthService";

export const getAllDoctor = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/doctor/list?page=${page}&nameDoctor=${nameSearch}` ,{headers:authHeader()})
        return rs.data;
    }catch (e){
        return undefined
    }
}

export const getAllDoctorBySpecialty = async (id, page) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/doctor/list/specialty/${id}?page=${page}` ,{headers:authHeader()});
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

export const getDoctorById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/doctor/details/${id}` ,{headers:authHeader()});
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

export const getAllDoctorPageBySpecialty = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/doctor/list/specialty/${id}`);
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

export const getAllDoctorHome = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/doctor/list/home?page=${page}&nameDoctor=${nameSearch}` ,{headers:authHeader()})
        return rs.data;
    }catch (e){
        return undefined
    }
}