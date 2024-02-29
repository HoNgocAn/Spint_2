import axios from "axios";

export const getAllDoctor = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/doctor/list?page=${page}&nameDoctor=${nameSearch}`)
        return rs.data;
    }catch (e){
        return undefined
    }
}


export const getAllDoctorBySpecialty = async (id, page) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/doctor/list/specialty/${id}?page=${page}`);
        return rs.data;
    }catch (e){
        throw e.response;
    }
}
export const getDoctorById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/doctor/details/${id}`);
        console.log(rs)
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
        let rs = await axios.get(`http://localhost:8080/api/doctor/list/home?page=${page}&nameDoctor=${nameSearch}`)
        return rs.data;
    }catch (e){
        return undefined
    }
}