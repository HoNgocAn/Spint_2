import axios from "axios";
import authHeader from "../auth/AuthService";

export const getCustomerByEmail = async (email) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/customer/details/${email}`)
        return rs.data;
    }catch (e){
        throw e.response;
    }
}

