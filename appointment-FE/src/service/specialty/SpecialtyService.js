import axios from "axios";
import authHeader from "../auth/AuthService";

export const getAllSpecialty = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/specialty/list?page=${page}&nameSpecialty=${nameSearch}`,{headers:authHeader()})
        return rs.data;
    }catch (e){
        return undefined
    }
}

export const getSpecialtyById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/specialty/details/${id}` ,{headers:authHeader()});
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

export const getAllSpecialtyHome = async (page, nameSearch) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/specialty/list/home?page=${page}&nameSpecialty=${nameSearch}` ,{headers:authHeader()})
        return rs.data;
    }catch (e){
        return undefined
    }
}

export const getAllSpecialtyHomePage= async () => {
    try {
        let rs = await axios.get("http://localhost:8080/api/specialty/list/home")
        return rs.data
    }catch (e){
        return undefined
    }
}