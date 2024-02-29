import Header from "../Header";
import Footer from "../Footer";
import ReactPaginate from "react-paginate";

import React,{useEffect, useState} from "react";
import * as method from "../../service/doctor/DoctorService";
import * as methodS from "../../service/specialty/SpecialtyService";
import {Link, useParams} from "react-router-dom";


function DetailSpecialty(){

    const {id} = useParams();
    const [doctor, setDoctor] = useState([]);
    const [specialty, setSpecialty] = useState({});

    const [totalPages, setTotalPages] = useState(0);
    console.log(id)

    useEffect(() => {
        getAll(id, 0)
        getSpecialty()
    }, []);


    const getAll = async (id,page) => {
        try {
            let data = await method.getAllDoctorBySpecialty(id,page);
            setDoctor(data.content);
            setTotalPages(data.totalPages)
            console.log(data)
        }catch (e) {
            console.log("Error");
        }
    }

    const getSpecialty = async () =>{
        try {
            let data = await methodS.getSpecialtyById(id);
            setSpecialty(data);
            console.log(data)
        }catch (e) {
            console.log("Error");
        }
    }

    const handlePageClick = (event) => {
        getAll(event.selected)
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
                                <img src={item.avatar} height="160" width="270"/>
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
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Sau>"
                            onPageChange={handlePageClick}
                            pageCount={totalPages}
                            previousLabel="<Trước"

                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                        />
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