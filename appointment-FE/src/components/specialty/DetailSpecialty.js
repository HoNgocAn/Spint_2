import Header from "../Header";
import Footer from "../Footer";
import ReactPaginate from "react-paginate";
import React,{useEffect, useState} from "react";
import * as method from "../../service/doctor/DoctorService";
import * as methodS from "../../service/specialty/SpecialtyService";
import {Link, useNavigate, useParams} from "react-router-dom";
import Appointment from "../appointment/Appointment";
import Pagination from "../Pagination";


function DetailSpecialty(){

    const navigate = useNavigate();

    const [nameSearch, setNameSearch] = useState("")
    const {id} = useParams();
    const [doctor, setDoctor] = useState([]);
    const [specialty, setSpecialty] = useState({});

    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getAll(id, 0, nameSearch)
        getSpecialty()
    }, []);


    const getAll = async (id,page, nameSearch) => {
        try {
            let data = await method.getAllDoctorBySpecialty(id,page, nameSearch);
            setDoctor(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            navigate("/error404")
        }
    }

    const getSpecialty = async () =>{
        try {
            let data = await methodS.getSpecialtyById(id);
            setSpecialty(data);
        }catch (e) {
            navigate("/error404")
        }
    }

    const handlePageClick = (event) => {
        getAll(id, event.selected, nameSearch)
    }

    return(
        <>
            <Header/>
            <div className="container">

                <h2>Các bác sĩ của chuyên khoa {specialty.name}:</h2>
                {doctor ? (
                    doctor.map(item =>

                        <div className="row row-doctor-list" key={item.id}>
                            <div className="col-12 col-lg-3">
                                <img src={item.avatar} height="300" width="270"/>
                            </div>
                            <div className="col-12 col-lg-7 item-specialty">
                                <h4>{item.name}</h4>
                            </div>
                            <div className="col-12 col-lg-2 item-specialty">
                                <Link to={`/doctor/detail/${item.id}`} style={{textDecoration:"none", color:"black"}}>
                                    <button type="button" className="btn btn-warning">Xem chi tiết</button>
                                </Link>
                            </div>
                        </div>
                    )
                ) : (
                    <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
                )}
            </div>
            <div className="pagination">
                {totalPages > 1 ? (
                    <div className="page">
                        <Pagination handlePageClick={handlePageClick} totalPages={totalPages} />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <Footer/>
        </>
    )
}

export default DetailSpecialty;