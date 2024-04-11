import React, {useEffect, useState} from "react";
import * as method from "../../service/specialty/SpecialtyService";
import * as methodDoctor from "../../service/doctor/DoctorService";
import Header from "../Header";
import img_1 from "../../img/img_1.png";
import img_2 from "../../img/img_2.png";
import {Link, NavLink, useNavigate} from "react-router-dom";
import img_29 from "../../img/img_29.png";
import img_30 from "../../img/img_30.png";
import img_31 from "../../img/img_31.png";
import img_3 from "../../img/img_3.png";
import img_4 from "../../img/img_4.png";
import img_5 from "../../img/img_5.png";
import img_6 from "../../img/img_6.png";
import img_7 from "../../img/img_7.png";
import img_8 from "../../img/img_8.png";
import img_9 from "../../img/img_9.png";
import img_10 from "../../img/img_10.png";
import img_11 from "../../img/img_11.png";
import img_12 from "../../img/img_12.png";
import img_25 from "../../img/img_25.png";
import img_26 from "../../img/img_26.png";
import img_27 from "../../img/img_27.png";
import img_28 from "../../img/img_28.png";
import Footer from "../Footer";
import authToken from "../../service/units/UserToken";
import logo from "../../img/logo.png";
import ModalLogout from "../login/ModalLogout";


function HomeCustomer(){

    const navigate = useNavigate();

    const [nameSearch, setNameSearch] = useState([])

    const [specialty, setSpecialty] = useState([]);


    const [nameSearchDoctor, setNameSearchDoctor] = useState([])

    const [doctor, setDoctor] = useState([]);


    useEffect(() => {
        getAllSpecialty(0,nameSearch);
        getAllDoctor(0,nameSearchDoctor)
    }, []);


    const getAllSpecialty = async (page,nameSearch) => {
        try {
            let data = await method.getAllSpecialtyHome(page,nameSearch);
            setSpecialty(data.content);
        }catch (e) {
            navigate("/error404")
        }
    }


    const getAllDoctor = async (page,nameSearchDoctor) => {
        try {
            let data = await methodDoctor.getAllDoctorHome(page,nameSearchDoctor);
            setDoctor(data.content);
        }catch (e) {
            navigate("/error404")
        }
    }

    let role;

    if (!authToken()){
        console.log("error")
    }else {
        role = authToken().roles[0].authority;
    }



    return (
        <>
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
                                    <li><Link className="dropdown-item"  to="/search-appointment">Tìm kiếm lịch hẹn</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-1" style={{paddingTop:"10px", paddingLeft:"30px"}}>
                        { role == "CUSTOMER" ?
                            <Link to="/dashboard" style={{textDecoration: 'none' }}>
                                <p>{role}</p>
                            </Link>
                            :<p>TÀI KHOẢN</p>
                        }
                    </div>
                    { role == "CUSTOMER"?
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
                        <Link to="/search-appointment/customer" style={{textDecoration: 'none' }}>
                            <p className="text-header" style={{color:"black",  textDecoration: 'none' }}>Lịch hẹn</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="img-background">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img_1} className="d-block w-100" alt="..." height="400"/>
                            </div>
                            <div className="carousel-item">
                                <img src={img_2}  className="d-block w-100" alt="..." height="400"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="list-home">
                        <h3>Dành cho bạn</h3>
                        <div className="row row-list-home">
                            <div className="col-12 col-lg-4 ">
                                <Link to="/doctor" style={{textDecoration:"none", color:"black"}}>
                                    <div className="card" style={{width:"350px", height: "330px"}}>
                                        <img className="card-img-top" src={img_29} alt="Card image" height="250"
                                             width="250"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Bác sĩ</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-lg-4 ">
                                <Link to="/specialty" style={{textDecoration:"none", color:"black"}}>
                                    <div className="card" style={{width:"350px", height: "330px"}}>
                                        <img className="card-img-top" src={img_30} alt="Card image" height="250"
                                             width="250"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Chuyên khoa</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-lg-4  ">
                                <Link to="#" style={{textDecoration:"none", color:"black"}}>
                                    <div className="card" style={{width:"350px", height: "330px"}}>
                                        <img className="card-img-top" src={img_31} alt="Card image" height="250"
                                             width="250"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Bài viết</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="comprehensive-service">
                        <h3>Dịch vụ toàn diện</h3>
                        <div className="row row-home">
                            <div className="col-12 col-lg-1">
                                <img src={img_3} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Khám chuyên khoa</h4>
                            </div>
                            <div className="col-12 col-lg-1">
                                <img src={img_4} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Khám từ xa</h4>
                            </div>
                        </div>

                        <div className="row row-home">
                            <div className="col-12 col-lg-1">
                                <img src={img_5} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Khám tổng quát</h4>
                            </div>
                            <div className="col-12 col-lg-1">
                                <img src={img_6} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Xét nghiệm y học</h4>
                            </div>
                        </div>

                        <div className="row row-home">
                            <div className="col-12 col-lg-1">
                                <img src={img_7} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Sức khỏe tinh thần</h4>
                            </div>
                            <div className="col-12 col-lg-1">
                                <img src={img_8} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Khám nha khoa</h4>
                            </div>
                        </div>

                        <div className="row row-home">
                            <div className="col-12 col-lg-1">
                                <img src={img_9} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Gói phẫu thuật</h4>
                            </div>
                            <div className="col-12 col-lg-1">
                                <img src={img_10} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Sức khỏe tiểu đường</h4>
                            </div>
                        </div>

                        <div className="row row-home">
                            <div className="col-12 col-lg-1">
                                <img src={img_11} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Bài test sức khỏe</h4>
                            </div>
                            <div className="col-12 col-lg-1">
                                <img src={img_12} width="50" height="50"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h4>Y tế gần bạn</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="specialist">
                    <h3>Chuyên khoa</h3>
                    <div id="carouselSpecialist" className="carousel slide">
                        <div className="carousel-inner">
                            {specialty ? (
                                specialty.reduce((accumulator, currentItem, index) => {
                                    if (index % 3 === 0) {
                                        accumulator.push([]);
                                    }
                                    accumulator[accumulator.length - 1].push(
                                        <div className="col-12 col-lg-4" key={currentItem.id}>
                                            <div className="card" style={{ width: "380px", height: "350px" }}>
                                                <img className="card-img-top" src={currentItem.img} alt="Card image" width="300" height="320" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{currentItem.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    return accumulator;
                                }, []).map((carouselItem, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="row row-home">{carouselItem}</div>
                                    </div>
                                ))
                            ) : (
                                <h5 style={{ color: "red" }}>Không tìm thấy dữ liệu</h5>
                            )}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselSpecialist" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselSpecialist" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="doctor">
                    <h3 style={{paddingBottom: "25px"}}>Bác sĩ nổi bật</h3>
                    <div id="carouselDoctor" className="carousel slide">
                        <div className="carousel-inner">
                            {doctor ? (
                                doctor.reduce((accumulator, currentItem, index) => {
                                    if (index % 3 === 0) {
                                        accumulator.push([]);
                                    }
                                    accumulator[accumulator.length - 1].push(
                                        <div className="col-12 col-lg-4 img-doctor-home" key={currentItem.id}>
                                            <div className="card" style={{ width: "350px", height: "360px" }}>
                                                <img className="card-img-top" src={currentItem.avatar} alt="Card image" width="250" height="260" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{currentItem.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    return accumulator;
                                }, []).map((carouselItem, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="row row-home">{carouselItem}</div>
                                    </div>
                                ))
                            ) : (
                                <h5 style={{ color: "red" }}>Không tìm thấy dữ liệu</h5>
                            )}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDoctor" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDoctor" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="media">
                    <h3 style={{textAlign: "center", paddingBottom: "25px"}}>Truyền thông nói về BookingCare</h3>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <iframe width="560" height="320"
                                    src="https://www.youtube.com/embed/9GJs55yqLNY?si=7A6N0y6z8wVuXE-A"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <img src={img_25} height="80" width="100"/>
                            </div>
                            <div className="row">
                                <img src={img_26} height="80" width="100"/>
                            </div>
                            <div className="row">
                                <img src={img_27} height="80" width="100"/>
                            </div>
                            <div className="row">
                                <img src={img_28} height="80" width="100"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default HomeCustomer;