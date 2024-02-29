
import Footer from "../Footer";
import Header from "../Header";
import * as method from "../../service/specialty/SpecialtyService"
import React, {useEffect, useState} from "react";
import "../Home.css";
import ReactPaginate from 'react-paginate';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

import {Link, NavLink, useNavigate} from "react-router-dom";

function SearchSpecialty(){

    const [nameSearch, setNameSearch] = useState([])

    const [specialty, setSpecialty] = useState([]);


    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getAll(0,nameSearch);
    }, []);

    const getAll = async (page,nameSearch) => {
        try {
            let data = await method.getAllSpecialty(page,nameSearch);
            setSpecialty(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            console.log("Error");
        }
    }

    const handlePageClick = (event) => {
        getAll(event.selected, nameSearch)
    }


    const submitSearch = async () => {
        try {
            let res = await method.getAllSpecialty(0,nameSearch);
            setSpecialty(res.content);
            setTotalPages(Math.ceil(res.totalElements/res.size));
        } catch (e){
            console.log("/Error");
        }
    }

    const handleNameSearch = async (value) =>{
        setNameSearch(value);
        submitSearch();
    }

    const initValue = {
        name: "",
    }

    const validateForm = {
        name: yup.string().required("Không được để trống")

    }


    console.log(nameSearch)
    return (
        <>
            <Header/>
            <div className="container">

                <h2>Các chuyên khoa của bệnh viện</h2>
                <div className="input-find" >
                    <div className="row m-2">
                        <div className="col-auto">
                            <input type="text" name="name" className="form-control"
                                   onChange={(event => handleNameSearch(event.target.value))} id="name"
                                   placeholder="Tìm kiếm theo tên "/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-secondary"
                                    onClick={() => submitSearch()}>
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>

                {/*<Formik initialValues={initValue}*/}
                {/*        onSubmit={(values)=>{*/}
                {/*           handleNameSearch(values);*/}
                {/*        }}*/}
                {/*        validationSchema={yup.object(validateForm)} >*/}
                {/*    <Form className="form-search">*/}
                {/*        <div className="mb-3">*/}
                {/*            <Field type="text" name="name" className="form-control" id="name"*/}
                {/*                   placeholder="Tìm kiếm theo tên"*/}
                {/*                />*/}
                {/*            <ErrorMessage*/}
                {/*                name="name"*/}
                {/*                component="span"*/}
                {/*                className="err-name"*/}
                {/*            ></ErrorMessage>*/}
                {/*        </div>*/}

                {/*        <button type="submit" className="btn btn-primary"  >*/}
                {/*            Tìm kiếm*/}
                {/*        </button>*/}
                {/*    </Form>*/}
                {/*</Formik>*/}

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

export default SearchSpecialty;