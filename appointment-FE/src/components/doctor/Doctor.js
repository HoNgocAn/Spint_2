import Footer from "../Footer";
import Header from "../Header";
import * as method from "../../service/doctor/DoctorService"
import React, {useEffect, useState} from "react";
import "../Home.css";
import ReactPaginate from 'react-paginate';

import {Link, NavLink, useNavigate} from "react-router-dom";
import Pagination from "../Pagination";

function Doctor(){

    const navigate = useNavigate();

    const [nameSearch, setNameSearch] = useState([])

    const [doctor, setDoctor] = useState([]);


    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getAll(0,nameSearch);
    }, []);

    const getAll = async (page,nameSearch) => {
        try {
            let data = await method.getAllDoctor(page,nameSearch);
            setDoctor(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            navigate("/error404")
        }
    }

    const handlePageClick = (event) => {
        getAll(event.selected, nameSearch)
    }


    return (
        <>
            <Header/>
            <div className="container">

                <h2>Các bác sĩ của bệnh viện</h2>
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

export default Doctor;