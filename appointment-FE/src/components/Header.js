import logo from "../img/logo.png";
import {Link, NavLink} from "react-router-dom";
import authToken from "../service/units/UserToken";
import ModalLogout from "./login/ModalLogout";
import React from "react";

function Header() {

    let role;

    if (!authToken()){
        console.log("Error")
    }else {
        role = authToken().roles[0].authority;
    }

    console.log(authToken())


    return (
        <div className="container-fluid header">
            <div className="row row-header">
                <div className="col-12 col-lg-1">

                </div>
                <div className="col-12 col-lg-2">
                    <img src={logo} width="200" height="40"/>
                </div>
                <div className="col-12 col-lg-1">
                    <Link to="/" style={{textDecoration: 'none' }}>
                        <p className="text-header" style={{color:"black",  textDecoration: 'none' }}>Trang chủ</p>
                    </Link>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Tại nhà</p>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Tại viện</p>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Sống khỏe</p>
                </div>
                <div className="col-12 col-lg-2">
                    <div className="col-auto input-header" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <div className="dropdown">
                            <a className="find btn btn-white dropdown-toggle" href="#" role="button"
                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Tìm kiếm
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to="/search-specialty">Tìm kiếm  chuyên khoa</Link></li>
                                <li><Link className="dropdown-item" to="/search-doctor">Tìm kiếm bác sĩ</Link></li>
                                <li><Link className="dropdown-item" to="/search-appointment">Tìm kiếm lịch hẹn</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1" style={{paddingTop:"10px", paddingLeft:"30px"}}>
                    {role =="ADMIN" ||  role == "DOCTOR" ||  role == "CUSTOMER" ?
                        <Link to="/dashboard" style={{textDecoration: 'none' }}>
                            <p>{role}</p>
                        </Link>
                        :<p>TÀI KHOẢN</p>
                    }
                </div>
                {role == "ADMIN" ||  role == "DOCTOR"  ||  role == "CUSTOMER"?
                    <div className="col-12 col-lg-1" style={{paddingTop:"4px", paddingLeft:"-10px"}}>
                        <NavLink role="button" className="sidebar-link text-dark">
                            <button className="btn btn-outline-secondary" data-bs-toggle="modal"
                                    data-bs-target="#logout">Đăng Xuất
                            </button>
                        </NavLink>
                    </div>
                    :
                    <div className="col-12 col-lg-1" >
                        <Link

                        to="/login"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            className="bi bi-person-heart" viewBox="0 0 16 16" style={{marginLeft: "30px",marginTop:"10px"}}>
                        <path
                            d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
                            </svg>
                        </Link>
                    </div>
                }
                <ModalLogout/>
                <div className="col-12 col-lg-1">

                </div>
            </div>
        </div>

    )
}

export default Header;