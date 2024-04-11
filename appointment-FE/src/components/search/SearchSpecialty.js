
import Footer from "../Footer";
import Header from "../Header";
import * as method from "../../service/specialty/SpecialtyService"
import React, {useEffect, useState} from "react";
import "../Home.css";
import ReactPaginate from 'react-paginate';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

import {Link, NavLink, useNavigate} from "react-router-dom";
import Pagination from "../Pagination";

function SearchSpecialty(){

    const navigate = useNavigate();

    const [error, setError] = useState("")

    const [nameSearch, setNameSearch] = useState("")

    const [specialty, setSpecialty] = useState([]);

    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getAll(0,nameSearch);
    }, []);

    const getAll = async (page) => {
        try {
            let data = await method.getAllSpecialty(page,nameSearch);
            setSpecialty(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            navigate("/error404")
        }
    }
    //
    const handlePageClick = (event) => {
        getAll(event.selected, nameSearch)
    }
    //
    const submitSearch = async () => {
        try {
            let res = await method.getAllSpecialty(0,nameSearch);
            setSpecialty(res.content);
            setTotalPages(Math.ceil(res.totalElements/res.size));
            setError("");
        } catch (e){
            navigate("/error404")
        }
    }

    const dontContainsSpecialCharacters = (string) => {
        const regex = /^[^!@#$%^&*()_+={}\[\]:;,<.>?\\\/'"`]*$/;

        if (!regex.test(string)) {
            setError("Không được chứa ký tự đặc biệt");
        } else {
            submitSearch().then()
        }
    };
    const search = () => {
        if (dontContainsSpecialCharacters(nameSearch)) {

        } else {
            console.log("error")
        }
    }
    return (
        <>
            <Header/>
            <div className="container">

                <h2>Các chuyên khoa của bệnh viện</h2>
                <div className="input-find" >
                    <form style={{width: "20%", alignContent: "center"}} className="input-group mb-3 mb-md-2 "
                          role="search">
                        <div className="input-search-doctor">
                            <input type="search" className="form-control form-control-dark text-bg-light col-6"
                                   placeholder="Tìm kiếm..." aria-label="Search" onChange={(event) => {setNameSearch("" + (event.target.value))

                            }}/>
                            <button type="submit" className="btn btn-light me-2"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        search();
                                    }}>
                                <i
                                    className="fas fa-search"/>
                            </button>
                        </div>
                        {error ? <p style={{color:"red"}}>{error}</p> : <p></p>}
                    </form>
                </div>


                {specialty ? (
                    specialty.map(item =>
                        <div className="row row-specialty" key={item.id}>
                            <div className="col-12 col-lg-3">
                                <img src={item.img} height="160" width="270"/>
                            </div>
                            <div className="col-12 col-lg-7 item-specialty">
                                <h4>{item.name}</h4>
                            </div>
                            <div className="col-12 col-lg-2 item-specialty">
                                <Link to={`/specialty/detail/${item.id}` }style={{textDecoration:"none", color:"black"}}>
                                    <button type="button" className="btn btn-warning">Xem chi tiết</button>
                                </Link>
                            </div>
                        </div>
                    )
                ) : (
                    <h5 style={{color: "red",textAlign:"center", marginRight:"40px"}}>Không tìm thấy dữ liệu</h5>
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

export default SearchSpecialty;