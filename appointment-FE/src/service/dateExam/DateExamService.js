import axios from "axios";
import authHeader from "../auth/AuthService";


export const getAllDate = async (page) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/date/list?page=${page}` )
        return rs.data;
    }catch (e){
        return undefined
    }
}

export const getDateById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/date/details/${id}` );
        return rs.data;
    }catch (e){
        throw e.response;
    }
}